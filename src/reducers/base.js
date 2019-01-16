import Duck from 'extensible-duck'
import produce from 'immer'

export default function createDuck({ namespace, store, initialState = {}, creators, selectors }) {
  return new Duck({
    namespace,
    store,
    consts: {
      statuses: [ 'NEW', 'LOADING', 'READY', 'SAVING', 'SAVED', 'DELETED', 'ERROR', 'CANCEL', 'EDITING', 'SAVED_FILTER' ]
    },
    types: [
      'REMOVE',
      'UPDATE',
      'FETCH',
      'SET_PAYLOAD',
      'FETCH_PENDING',
      'FETCH_FULFILLED',
      'FETCH_FAILURE',
      'FETCH_CANCEL',
      'FETCH_FOR_PATH',
      'FETCH_FOR_PATH_PENDING',
      'FETCH_FOR_PATH_FULFILLED',
      'FETCH_FOR_PATH_FAILURE',
      'SET_FILTER_FULFILLED',
      'PUT_PENDING',
      'PUT_FULFILLED',
      'PUT_FAILURE',
      'PUT_CANCEL',
      'PUT_DATA_FOR_KEY',
      'PUT',
      'POST',
      'POST_PENDING',
      'POST_FULFILLED',
      'POST_FAILURE',
      'POST_CANCEL',
      'DELETE',
      'DELETE_PENDING',
      'DELETE_FULFILLED',
      'DELETE_FAILURE',
      'DELETE_CANCEL',
      'RESET',
      'PATCH',
      'PATCH_PENDING',
      'PATCH_UPDATE',
      'PATCH_FULFILLED',
      'PATCH_FAILURE',
      'PATCH_CANCEL'
    ],
    reducer: (state, action, { types, statuses }) =>
      produce(state, draft => {
        switch (action.type) {
          case types.UPDATE:
            if(draft.status !== statuses.EDITING) draft.status = statuses.EDITING
            for (let key in action.payload) draft[key] = action.payload[key]

            return
          case types.FETCH_PENDING:
            draft.status = statuses.LOADING
            for (let key in action.payload) draft[key] = action.payload[key]

            return
          case types.SET_PAYLOAD:
          case types.FETCH_FULFILLED:
            for (let key in action.payload) draft[key] = action.payload[key]
            draft.status = statuses.READY

            return
          case types.FETCH_FOR_PATH_FULFILLED:
            if(action.dataForPath) draft.dataForPath = action.dataForPath
            for (let key in action.payload) draft[key] = action.payload[key]
            draft.status = statuses.READY

            return
          case types.FETCH_FOR_PATH_PENDING:
          case types.POST_PENDING:
          case types.PUT_PENDING:
          case types.PATCH_PENDING:
          case types.DELETE_PENDING:
            draft.status = statuses.SAVING

            return
          case types.POST_FULFILLED:
          case types.PUT_FULFILLED:
          case types.PATCH_FULFILLED:
            if(action.id) draft.id = action.id
            for (let key in action.payload) draft[key] = action.payload[key]
            draft.status = statuses.SAVED

            return
          case types.DELETE_FULFILLED:
            draft.status = statuses.DELETED

            return
          case types.FETCH_FOR_PATH_FAILURE:
          case types.FETCH_FAILURE:
          case types.PUT_FAILURE:
          case types.POST_FAILURE:
          case types.PATCH_FAILURE:
          case types.DELETE_FAILURE:
            draft.status = statuses.ERROR
            draft.error = action.error

            return
          case types.FETCH_CANCEL:
          case types.POST_CANCEL:
          case types.PUT_CANCEL:
          case types.DELETE_CANCEL:
          case types.PATCH_CANCEL:
            draft.status = statuses.CANCEL

            return
          case types.SET_FILTER_FULFILLED:
            for (let key in action.payload) draft[key] = action.payload[key]
            draft.status = statuses.SAVED_FILTER

            return
          case types.PATCH_UPDATE:
            const {
              payload: { id, item }
            } = action
            for (let key in item) draft.items[draft.items.findIndex(item => item.id === id)][key] = item[key]

            return
          case types.RESET:
            return {
              ...initialState,
              status: statuses.NEW,
              error : null
            }
          case types.PUT_DATA_FOR_KEY:
            for (let key in action.payload) draft[key] = [ ...state[key], action.payload[key] ]

            return
          default:
            return
        }
      }),
    selectors,
    creators,
    initialState: ({ statuses }) => ({
      ...initialState,
      status: statuses.NEW,
      error : null
    })
  })
}
