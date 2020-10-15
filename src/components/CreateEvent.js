
import Axios from 'axios';
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
class CreateEvent extends React.Component {
    state = {
        name: '', 
        date: '',
        time: '',
        sport: '',
        details: '',
        address: '',
        city: '',
        state: '',
        zip: '', 
        image: '',
        checked: '',
        phone: '',
    }

handleSubmit= (e) => {
    e.preventDefault()
    console.log(e)
    axios.post("http://localhost:3000/events", { 
        user_id: this.props.user.id, 
        name: this.state.name, 
        details: this.state.details,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zip,
        time: this.state.time,
        date: this.state.date,
        sport: this.state.sport,
        image: this.state.image
    }, 
    {withCredentials: true})
    .then(response => {
        window.location.href = "/profile"
    
    })
}
handleEventChange=(e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(this.state)
}
    render() {
       
  return (
    <Form onSubmit={this.handleSubmit}className="create-event-form">
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label className="event-label" for="exampleEmail">Event Name</Label>
          <Input className="input-field" type="text" name="name" id="eventName" placeholder="Your Event Name" onChange={this.handleEventChange} value={this.state.name}  />
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
        onChange={this.handleEventChange}
        value={this.state.date} 
        />
      </FormGroup>
      </Col>
    </Row>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label className="event-label" for="exampleEmail">Time</Label>
          <Input className="input-field" type="time" name="time" id="eventTime" onChange={this.handleEventChange} value={this.state.time} />
        </FormGroup>
      </Col>
      <Col md={6}>
      <FormGroup>
        <Label className="event-label" for="exampleDate">Sport</Label>
        <Input
          type="select"
          name="sport"
          id="eventSport"
          placeholder="Choose Sport" 
          onChange={this.handleEventChange} 
          value={this.state.sport}
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
        <Input className="input-field" type="textarea" name="details" id="exampleText" placeholder="Describe Your Event" onChange={this.handleEventChange} value={this.state.details}/>
      </FormGroup>
    <FormGroup>
      <Label className="event-label" for="exampleAddress">Address</Label>
      <Input className="input-field" type="text" name="address" id="exampleAddress" placeholder="1234 Main St" onChange={this.handleEventChange} value={this.state.address}/>
    </FormGroup>
   
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label className="event-label" for="exampleCity">City</Label>
          <Input className="input-field" type="text" name="city" id="exampleCity" onChange={this.handleEventChange} value={this.state.city}/>
        </FormGroup>
      </Col>
      <Col md={4}>
        <FormGroup>
          <Label className="event-label" for="exampleState">State</Label>
          <Input type="text" name="state" id="exampleState" onChange={this.handleEventChange} value={this.state.state} />
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Label className="event-label" for="exampleZip">Zip</Label>
          <Input  type="text" name="zip" id="exampleZip" onChange={this.handleEventChange} value={this.state.zip} />
        </FormGroup> 
         
      </Col>
      </Row>
      <FormGroup>
      <Label className="event-label" for="exampleAddress">Cover Image</Label>
      <Input className="input-field" type="text" name="image" id="exampleAddress" placeholder="1234 Main St" onChange={this.handleEventChange} value={this.state.image}/>
    </FormGroup>
    <FormGroup check>
            <Label check>
              <Input name="checked" value={this.state.checked} onChange={this.handleEventChange} type="checkbox" id="checkbox2" />{' '}
              I'm all ready!
            </Label>
          </FormGroup>
          <Row form>
          <Button className="create-event-button" type="submit">Submit</Button>
          </Row>
      {/* <Button className="create-event-button" type="submit">Submit</Button> */}

   
  </Form>
);
}


}

export default CreateEvent;