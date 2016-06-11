import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';

import App from './components/App';
import ToDo from './components/ToDo';
import Home from './components/Home';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="todo" component={ToDo}/>
        </Route>
    </Router>
),document.getElementById('root'))
