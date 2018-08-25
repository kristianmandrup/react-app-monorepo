import {App} from './App'
// render app

function render(type = 'Static', id = 'root') {
  const rootNode = document.getElementById(id)
  ReactDOM.render(App[type], rootNode)
}

// TODO: we can render multiple apps on the main page!
render()
