import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './pages/router';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
		<Provider store={store}>
    	<Router />
		</Provider>
  </React.StrictMode>
)