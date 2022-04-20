import { getFirebase } from "./firebase/config"
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

getFirebase()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);