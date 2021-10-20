import Header from './Header'
import {
  BrowserRouter as Router,
  Route
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
    <div >
    <Halloween/>
    </div>
    </Route>
    </Router>
  );
}

export default App;
