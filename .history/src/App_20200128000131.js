import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Switch>
        <Route path='/' component={Dashboard}/>
        <Route path='/project/:id' component={ProjectDetails}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
