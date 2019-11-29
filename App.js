import React from 'react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'

import Store from './Store/configureStore'
import Navigation from './Navigation/Navigation'

export default class App extends React.Component {  
  render() {
    let persiststore = persistStore(Store)
    return (
      <Provider store={Store}>
        <PersistGate persistor={persiststore}>
          <Navigation/>
        </PersistGate>
      </Provider>
    )
  }
}