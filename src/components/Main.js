import React             from 'react'
import { Switch, Route } from 'react-router-dom'
import Home              from './Home'
import People            from './pages/People'
import Planets           from './pages/Planets'
import Species           from './pages/Species'
import Starships         from './pages/Starships'
import Vehicles          from './pages/Vehicles'
import Films             from './pages/Films'

const Main = () => {
  return(
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/people' component={People}/>
        <Route path='/planets' component={Planets}/>
        <Route path='/species' component={Species}/>
        <Route path='/starships' component={Starships}/>
        <Route path='/vehicles' component={Vehicles}/>
        <Route path='/films' component={Films}/>
      </Switch>
    </main>
  );
}

export default Main
