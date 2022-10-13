import { combineReducers } from 'redux'
import appReducers from './pages/app/slices'
import routerReducers from './pages/router/slices'

const reducers = combineReducers({
  routerReducers,
  appReducers,
})

export default reducers
