import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SigIn from './components/auth/SignIn'
function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetails}/>
        <Route path='/project/sigin' component={SigIn}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
