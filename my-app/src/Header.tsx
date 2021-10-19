import { FC, useState } from "react";
import ErinLogo from "./ErinLogo";
import MainContent from "./MainContent";


interface MainContentProps {
  visible: boolean;
}

const Header: FC<MainContentProps> = (props) => {

const [ContentVisible, setContentVisible] = useState(true)

const skillOnClick = () => {
  ContentVisible ? setContentVisible(false) : setContentVisible(true);
}
  return (
    <div className="App">
    {/* <Navigation/> */}
    <div className="main-content">
      <div className="App-header">
        {/* <Logo fill="red" stroke="green" /> */}
        <ErinLogo />
        <div className="skills-container">
          <div className="skills skill1" onClick={skillOnClick}><p>Developing...</p></div>
          <div className="skills skill2"><p>Running...</p></div>
          <div className="skills skill3"><p>Lifting...</p></div>
          <div className="skills skill4"><p>Biking...</p></div>
          <div className="skills skill5"><p>Eating...</p></div>
          <div className="skills skill6"><p>Playing...</p></div>
        </div>
        <p className="content">...My way through life. Not necessarily in that order.</p>
        <MainContent visible={ContentVisible} />
      </div>
    </div>
  </div>
  );
};

export default Header;
