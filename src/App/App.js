
import { Provider } from 'react-redux'
import AppRoutes from '../AppRoutes/AppRoutes'
import React from 'react'
import ReactDOM from 'react-dom'
import store from '../store'

import reactToWebComponent from 'react-to-webcomponent'

/**
 * The app component
 * @returns {React.ReactElement} The app component
 */
function App() {
  return (
    <>
      <Provider store={store}>
        <React.StrictMode>
          <div className="content-wrapper">
            <AppRoutes />
          </div>
        </React.StrictMode>
      </Provider>
    </>
  )
}

const demo = reactToWebComponent(App, React, ReactDOM)
if (customElements) {
  customElements.define('redux-slice-demo', demo)
}

export default App
