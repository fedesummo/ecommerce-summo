import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { getFirebase } from "./firebase/config";
getFirebase()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);