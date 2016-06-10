import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

import App from './components/App';
import DashBoard from './components/DashBoard';
import Tenants from './components/Tenants';
import Properties from './components/Properties';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={DashBoard}/>
            <Route path="tenants" component={Tenants}/>
            <Route path="properties" component={Properties}/>
        </Route>
    </Router>
),document.getElementById('root'))
