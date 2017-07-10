import React from 'react';
import { Route , IndexRoute } from 'react-router';

import App from './App';
import LoginComponent from './components/login';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={LoginComponent} />
    </Route>
)