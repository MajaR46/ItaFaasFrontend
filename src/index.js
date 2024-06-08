import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import { TokenProvider } from './tokencontrext';

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
