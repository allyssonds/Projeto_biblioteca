import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Novo from './pages/novo';

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/novo" component={Novo}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;