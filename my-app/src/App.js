// import { ReactComponent as Logo } from './images/Mountain.svg';
import ErinLogo from './ErinLogo.tsx'

import './App.css';

function App() {
  return (
    
    <div className="App">
        {/* <Navigation/> */}
    <div className="main-content">
      <div className="App-header">
        {/* <Logo fill="red" stroke="green" /> */}
        <ErinLogo/>
        <div className="skills-container">
        <div className="skills skill1"><p>Developing...</p></div>
        <div className="skills skill2"><p>Running...</p></div>
        <div className="skills skill3" ><p>Lifting...</p></div>
        <div className="skills skill4"><p>Biking...</p></div>
        <div className="skills skill5"><p>Eating...</p></div>
        <div className="skills skill6"><p>Playing...</p></div>
        </div>
        <p className="content">...My way through life. Not necessarily in that order.</p>
      </div>
      </div>
    </div>
  );
}

export default App;
