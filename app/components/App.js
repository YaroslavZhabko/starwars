import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../routes';

const App = () =>
    <div>
        <h1>Home</h1>
        { Routes }
        <footer>
            <Link to="/">Home</Link>
        </footer>
    </div>;

export default App;
