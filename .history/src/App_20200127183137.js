import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/layout/Navbar'
function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
