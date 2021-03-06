import React from 'react';
import ReactDOM from 'react-dom';

import store from './store'
import {Provider} from 'react-redux'

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

  <ThemeProvider theme={theme}>
    <CssBaseline />
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
    </ThemeProvider>
      </React.StrictMode>,
      document.getElementById('root')
);
