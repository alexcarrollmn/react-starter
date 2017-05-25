import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import {App} from './components/App';



ReactDOM.render(
    <App />,
    document.getElementById('app')
);