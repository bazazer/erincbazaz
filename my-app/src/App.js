import React, {useState } from 'react';
import ErinLogo from './ErinLogo.tsx'
import MainContent from './MainContent.tsx'
import Header from './Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Halloween from "./Halloween"

import './App.css';

function App() {

  return (
    <Router>
      <Route exact path ="/">
    <div>
    <Header/>
    </div>
    </Route>
    <Route exact path ="/DogwoodHalloween">
    <div>
    <Halloween/>
    </div>
    </Route>
    </Router>
  );
}

export default App;
