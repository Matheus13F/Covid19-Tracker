import React, { useCallback, useEffect, useState } from 'react';

import { StylesProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { FiRefreshCw } from 'react-icons/fi';

import Main from './Containers/Main';

import './Assets/Style/global.css';

function App() {


  return (
  <StylesProvider injectFirst>
    <CssBaseline/>
      <header>
        <div className="div-header">
          <h1>Covid-19 Tracker</h1>
          <Button className="btn-sass" variant="contained" color="primary">Atualizar <FiRefreshCw size="1.3rem" /> </Button>
          
        </div>
        <Main />
      </header>

      <main>
        
      </main>
  </StylesProvider>
  );
}

export default App;
