import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyCCXYhG2esf63916M-nbJF8lsOMm4UYHUQ',
  authDomain: 'mini-blog-f8599.firebaseapp.com',
  databaseURL: 'https://mini-blog-f8599-default-rtdb.firebaseio.com',
  projectId: 'mini-blog-f8599',
  storageBucket: 'mini-blog-f8599.appspot.com',
  messagingSenderId: '633544152465',
  appId: '1:633544152465:web:4204dc43498865b104b630',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
