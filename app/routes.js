import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Films from './components/Films';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People} />
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/species" component={Species} />
        <Route exact path="/starships" component={Starships} />
        <Route exact path="/vehicles" component={Vehicles} />
        <Route exact path="/films" component={Films} />
    </Switch>
);
