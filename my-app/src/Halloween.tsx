import React, { FC, useState } from "react";
import reactLogo from "./images/reactlogo.png";
import coding from "./images/coding.png";
import ErinLogo from "./ErinLogo";
import MainContent from "./MainContent";
import skeleton from "./images/skeleton.jpg";
import { Container } from "react-bootstrap";



const Halloween = () => {


  return (
        //<img className="skeleton" alt="" src={skeleton} />
<div className="main-container">

    <div className="main-content">
    <Container>

    <h1 className="title">Dogwood Halloween House Crawl</h1>
    <div className="halloween-content">This is halloween content</div>
    </Container>
    </div>
</div>
  );
};

export default Halloween;
