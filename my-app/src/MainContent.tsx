import React from "react";
import { FC} from "react";
import coding from "./images/coding.png";


interface MainContentProps {
  visible: boolean;
}

const MainContent: FC<MainContentProps> = (props) => {
  return (
    <div>
      <div className={`main-page-content ${props.visible ? "" : "hidden"}`}>
        <img className="squareLogo" alt="" src={coding} />

      </div>
      <div id="developing-content" className="main-page-content hidden">
        Developing
      </div>
    </div>
  );
};

export default MainContent;
