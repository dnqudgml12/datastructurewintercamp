import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  //App.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// app이라는 component사용 app이 자체는 내부적으로 사용할 상태는 state로 사용 이 상태로는 state쓰이는지 모름
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
