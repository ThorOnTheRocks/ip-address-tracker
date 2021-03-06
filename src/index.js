import React from 'react';
import ReactDOM from 'react-dom';

import './sassStyles/_global.scss'
import './sassStyles/_typography.scss'

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);