import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Switch>
        <Route path='/' component={Dashboard}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
