import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'reducers'
import rootSaga from 'sagas'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()

const finalCreateStore = compose(applyMiddleware(sagaMiddleware))

const store = createStore(reducers, initialState, finalCreateStore)

sagaMiddleware.run(rootSaga)

export default store
