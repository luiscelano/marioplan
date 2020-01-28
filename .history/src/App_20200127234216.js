import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
