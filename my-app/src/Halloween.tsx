import { Button, Card, Col, Form, FormGroup } from "react-bootstrap";
import { CardBody, Input, Label, UncontrolledCollapse } from "reactstrap";
import emailjs from 'emailjs-com';
import { useState } from "react";


const Halloween = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);


  const sendEmail = (e: any) => {
    e.preventDefault();
    
    const templateParams={
      address: e.target.address.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

      emailjs.send('service_qm1qcbn', 'template_u0urazu', templateParams, 'user_VFbeJWAeR5yIrszWmb1Zf')
    .then(function(response) {
      setSubmitted(true);
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };
  console.log(submitted);


  return (
        //<img className="skeleton" alt="" src={skeleton} />
<div className="main-container">
    <h1 className="title horror-text">Dogwood Halloween<br/> House Crawl</h1>
    <h2 className="title2">When: Saturday October 30, 2021 7:00 - 11:00PM
    <br/>
    Where: Dogwood Lane (Haunted Hill)
    </h2>
    <div className="halloween-content">
      <p>Join us for a lovely stroll up Dogwood Lane for some adult trick or treating.
        Costumes are STRONGLY encouraged. Tentative house schedule detailed below. If you wish
        to add your garage as a drink, appetizer, or water station be sure to scare the hell
        out of us when we get to your house :-)
      </p>
      <h1>Schedule:</h1>
      <p>
      Stop 1: <br/><Button id="toggler1"> 402 Gasper's Graveyard</Button>
        <UncontrolledCollapse toggler="#toggler1">
        <Card className="card-slide">
        <CardBody>
        Food: 
        <br/>
        Walking tacos
        <br/>
        Mallory's magic munchies
        <br/>
        Drinks: 
        <br/>
        Matt's Monster Miller Lites
        <br/>
        Susies Spooky Smirnoff shots
        <br/>
        Hadleigh's haunted huggies
        </CardBody>
        </Card>
    </UncontrolledCollapse>
        <br/>
        Stop 2: <br/><Button id="toggler2">404 Hough's Haunted House</Button>
        <UncontrolledCollapse toggler="#toggler2">
        <Card className="card-slide">
        <CardBody>
        Food: 
        <br/>
        Pizza Roll Graveyard
        <br/>
        Drinks: 
        <br/>
        Wicked Whiskey Cider Cocktails 
        <br/>
        Apple Cider Mummy Mocktails
        <br/>
        Robbie's Haunted Totino's
        </CardBody>
        </Card>
    </UncontrolledCollapse>
        <br/>
        Stop 3: <br/><Button id="toggler3">406 Rodger's Ravens Roost</Button>
        <UncontrolledCollapse toggler="#toggler3">
        <Card className="card-slide">
        <CardBody>
        Food: 
        <br/>
        Spooky Smoked Bacon-Wrapped Pickles
        <br/>
        Drinks: 
        <br/>
        Dr. Jekyll's Jello Shots (alcoholic and non)
        </CardBody>
        </Card>
    </UncontrolledCollapse>
        
        <br/>
        
        Stop 4: 408 Clouser's CandyCorn Castle
        <br/>
        Stop 5: 413 Scott's Skeleton Shack
        <br/>
        Stop 6: 414 Gerboc's Gruesome Garage
        <br/>
        Stop 7: 415 Bazaz's Boogeyman Bungalow
        <br/>
        Stop 8: 418 Russell's Reaper Ranch
        <br/>
        Stop 9: 417(9) Henry and Jay's Weiner Station
      </p>
      <div>Are you a hosting house?</div>
    <div>Fill out form below to sign up for food/drink</div>
    {!submitted ? 
    <Form onSubmit={sendEmail}>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input className="input" type="email" name="email" id="email" placeholder="email"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect" >Dogwood Address:</Label>
        <Col sm={10}>
          <Input className="input" type="select" name="address" id="exampleSelect">
          <option hidden value="">Select an Address</option>
            <option>402 Dogwood</option>
            <option>404 Dogwood</option>
            <option>406 Dogwood</option>
            <option>408 Dogwood</option>
            <option>413 Dogwood</option>
            <option>414 Dogwood</option>
            <option>415 Dogwood</option>
            <option>418 Dogwood</option>
            <option>417(9) Dogwood</option>
            <option>Not listed - new stop</option>

          </Input>
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Drink and/or Food Signing Up For:</Label>
        <Input  className="input" type="textarea" name="message" id="exampleText" />
      </FormGroup>
      <Button type="submit">Submit</Button>

      </Form> : "thank you for submitting!"}
    
    </div>
</div>
  );
};

export default Halloween;
