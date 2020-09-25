//https://www.npmjs.com/package/react-router-dom
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;