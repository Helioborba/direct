import React from 'react';
import style from './App.module.css';
import Router from './components/Router/Router';
import CssBaseline from '@mui/material/CssBaseline';
// need to pick all those providers and merge them into a single import provider
import { CanvasContextProvider } from './context/message';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <CanvasContextProvider>
        <div className={style.App}>
          <Router></Router> 
        </div>
      </CanvasContextProvider>
    </React.Fragment>
  );
}

export default App;