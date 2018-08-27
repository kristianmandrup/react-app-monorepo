// import {App} from './App'
import React from 'react'
import ReactDOM from 'react-dom'
// render app
function render(type = 'Static', id = 'root') {
  // const MainApp = App[type]
  const rootNode = document.getElementById(id)
  const hello = () => (
    <div>hello world</div>
  )
  ReactDOM.render(hello(), rootNode)
}

// TODO: we can render multiple apps on the main page!
render()
