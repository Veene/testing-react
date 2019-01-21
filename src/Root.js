import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'

//second arg is the initial state of store
const store = createStore(reducers, {})

export default (props) => {
  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}