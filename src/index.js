import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './index.css';
import AppCardapioRouter from "./router";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <GlobalStyles />
        <AppCardapioRouter />
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
