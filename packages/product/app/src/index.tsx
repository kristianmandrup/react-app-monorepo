import {App} from './App'
import ReactDOM from 'react-dom'
// render app

const MainApp = App[type]

function render(type = 'Static', id = 'root') {
  const rootNode = document.getElementById(id)
  ReactDOM.render(
    <div>hello world</div>, rootNode)
}

// TODO: we can render multiple apps on the main page!
render()
