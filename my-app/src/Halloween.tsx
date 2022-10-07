import { Button, Card, Col, Form, FormGroup } from "react-bootstrap";
import { CardBody, Input, Label, UncontrolledCollapse } from "reactstrap";
import emailjs from 'emailjs-com';
import { useEffect, useState } from "react";
import React from "react";
import { HalloweenCrawl, IHalloweenStop, DogwoodAddresses } from "./Data";
import HalloweenContent from "./HalloweenContent";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Halloween = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>();
  const [expanded, setExpanded] = React.useState<string | false>(false);


  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };


  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      address: e.target.address.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    emailjs.send('service_qm1qcbn', 'template_u0urazu', templateParams, 'user_VFbeJWAeR5yIrszWmb1Zf')
      .then(function (response) {
        setSubmitted(true);
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  };
  console.log(submitted);


  return (
    
    //<img className="skeleton" alt="" src={skeleton} />
    <div className="main-container">
      <div className="halloween-titles">
      <h1 className="title horror-text">Dogwood Halloween House Crawl</h1>
      <h2 className="title2">When: Saturday October 30, 2021 7:00 - 11:00PM
        <br />
        Where: Dogwood Lane (Haunted Hill)
      </h2>
      </div>
      <div className="halloween-content">
        <HalloweenContent stops={HalloweenCrawl}/>
        <div>Are you a hosting house?</div>
        <div>Fill out form below to sign up for food/drink</div>
        {!submitted ?
          <Form onSubmit={sendEmail}>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input className="input" type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect" >Dogwood Address:</Label>
              <Col sm={10}>
                <Input className="input" type="select" name="address" id="exampleSelect">
                  <option hidden value="">Select an Address</option>
                  {DogwoodAddresses.map((address: string)=> {return(<><option>{address}</option></>)})}

                </Input>
              </Col>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Drink and/or Food Signing Up For:</Label>
              <Input className="input" type="textarea" name="message" id="exampleText" />
            </FormGroup>
            <Button type="submit">Submit</Button>

          </Form> : "thank you for submitting!"}
      </div>
    </div>
  );
};

export default Halloween;
