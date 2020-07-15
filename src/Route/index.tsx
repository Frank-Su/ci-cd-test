/**
 * Author: Frank
 * Date: 2020/06/09
 */
import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import * as Pages from '../Pages/index';
import * as Components from '../Components/index';

const RootRouter = (): JSX.Element => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Pages.HomePage} />
                <Route path="/header" component={Components.Header} />
            </Switch>
        </Router>
    );
};

export default RootRouter;
