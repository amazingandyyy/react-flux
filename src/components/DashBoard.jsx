import React, {Component} from 'react';
import { Link } from 'react-router';

export default class DashBoard extends Component {
    render() {
        return (
            <nav>
                <h1>ToDoApp - redux</h1>
                <ul className="nav nav-pills text-center">
                    <li role="presentation">
                        <Link to="/">Home</Link>
                    </li>
                    <li role="presentation">
                        <Link to="todo">todo</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
