import React, {Component} from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <h1>Property App</h1>
                <ul className="nav nav-pills text-center">
                    <li role="presentation">
                        <Link to="/">Home</Link>
                    </li>
                    <li role="presentation">
                        <Link to="tenants">Tenents</Link>
                    </li>
                    <li role="presentation">
                        <Link to="properties">properties</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default NavBar;
