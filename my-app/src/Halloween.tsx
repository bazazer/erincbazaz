import { Button, Col, Form, FormGroup } from "react-bootstrap";
import { Input, Label } from "reactstrap";
import emailjs from 'emailjs-com';


const Halloween = () => {


  const sendEmail = (e: any) => {
    e.preventDefault();
    alert(e.target.email.value);
    
    const templateParams={
      address: e.target.address.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

      emailjs.send('service_qm1qcbn', 'template_u0urazu', templateParams, 'user_VFbeJWAeR5yIrszWmb1Zf')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };


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
        1: 402 Gasper's Graveyard
        <br/>
        2: 404 Hough's Haunted House
        <br/>
        3: 408 Rodger's Ravens Roost
        <br/>
        4: 408 Clouser's CandyCorn Castle
        <br/>
        5: 4013 Scott's Skeleton Shack
        <br/>
        6: 414 Gerboc's Gruesome Garage
        <br/>
        7: 415 Bazaz's Boogeyman Bungalow
        <br/>
        8: 418 Russell's Reaper Ranch
        <br/>
        9: 417(9) Henry and Jay's Weiner Station
      </p>
      <div>Are you a hosting house?</div>
    <div>Fill out form below to sign up for food/drink</div>
    <Form onSubmit={sendEmail}>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input type="email" name="email" id="email" placeholder="email"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect" >Dogwood Address:</Label>
        <Col sm={10}>
          <Input type="select" name="address" id="exampleSelect">
          <option hidden value="">Select an Address</option>
            <option>402 Dogwood</option>
            <option>404 Dogwood</option>
            <option>408 Dogwood</option>
            <option>413 Dogwood</option>
            <option>414 Dogwood</option>
            <option>415 Dogwood</option>
            <option>418 Dogwood</option>
            <option>417(9) Dogwood</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Drink and/or Food Signing Up For:</Label>
        <Input type="textarea" name="message" id="exampleText" />
      </FormGroup>
      <Button type="submit">Submit</Button>

      </Form>
    </div>
</div>
  );
};

export default Halloween;
