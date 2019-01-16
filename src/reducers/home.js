import base from './base'
import produce from 'immer'

export default base({
  namespace   : 'enova',
  store       : 'home',
  initialState: {
    counter: 0
  }
}).extend({
  types  : [ 'ADD_COUNTER', 'REMOVE_COUNTER' ],
  reducer: (state, action, { types }) =>
    produce(state, draft => {
      switch (action.type) {
        case types.ADD_COUNTER:
          draft.counter++

          return
        case types.REMOVE_COUNTER:
          draft.counter--

          return
        default:
          return
      }
    }),
  creators: ({ types }) => ({
    addCounter   : () => ({ type: types.ADD_COUNTER }),
    removeCounter: () => ({ type: types.REMOVE_COUNTER })
  })
})
