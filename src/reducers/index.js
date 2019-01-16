import { combineReducers } from 'redux'

import routes from './routes'
import home from './home'

export default combineReducers({
  [routes.store]: routes.reducer,
  [home.store]  : home.reducer
})
