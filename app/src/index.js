import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// Material UI
import "@fontsource/roboto";
import'@mui/icons-material/AccessAlarm';
import'@mui/icons-material/ThreeDRotation';

import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);

// React root seems too unstable
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(
//   <BrowserRouter>
//     <App tab="home" />
//   </BrowserRouter>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
