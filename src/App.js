import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Index from './views/Index'
import NewRepo from './views/NewRepo';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index/>
        </Route>
        <Route path="/nuevo">
          <Navbar />
          <NewRepo />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
