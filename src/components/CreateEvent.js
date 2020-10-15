
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateEvent extends React.Component {
    render() {
  return (
    <Form className="create-event-form">
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label className="event-label" for="exampleEmail">Event Name</Label>
          <Input className="input-field" type="text" name="event-name" id="eventName" placeholder="Your Event Name" />
        </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label className="event-label" for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder"
        />
      </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label className="event-label" for="exampleEmail">Time</Label>
          <Input className="input-field" type="time" name="event-time" id="eventTime" />
        </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label className="event-label" for="exampleDate">Sport</Label>
        <Input
          type="select"
          name="select"
          id="eventSport"
          placeholder="Choose Sport"
        >
          <option>Soccer</option>
          <option>Basketball</option>
          <option>Football</option>
          <option>Volleyball</option>
          <option>Tennis</option>
          <option>Baseball</option>
          <option>Other</option>

        </Input>
      </FormGroup>
      </Col>
    </Row>
      
      <FormGroup>
        <Label className="event-label" for="exampleText">Details</Label>
        <Input className="input-field" type="textarea" name="text" id="exampleText" placeholder="Describe Your Event"/>
      </FormGroup>
    <FormGroup>
      <Label className="event-label" for="exampleAddress">Address</Label>
      <Input className="input-field" type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
    </FormGroup>
   
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label className="event-label" for="exampleCity">City</Label>
          <Input className="input-field" type="text" name="city" id="exampleCity"/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label className="event-label" for="exampleState">State</Label>
          <Input type="text" name="state" id="exampleState"/>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Label className="event-label" for="exampleZip">Zip</Label>
          <Input  type="text" name="zip" id="exampleZip" />
        </FormGroup>  
      </Col>
    </Row>
    
    <Button className="create-event-button">Submit</Button>
  </Form>
);
}


}

export default CreateEvent;