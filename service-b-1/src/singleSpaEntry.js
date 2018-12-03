import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './components/service-b-1-component/service-b-1-component'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter
})

export function bootstrap (props) {
  return reactLifecycles.bootstrap(props)
}

export function mount (props) {
  return reactLifecycles.mount(props)
}

export function unmount (props) {
  return reactLifecycles.unmount(props)
}

function domElementGetter () {
  let el = document.getElementById('service-b-child')
  return el
}
