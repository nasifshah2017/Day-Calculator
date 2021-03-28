import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import CountDown from './CountDown';

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: '',
      day: '2075-10-15'
    }
  }

  changeDate() {
    console.log(this.state);
    this.setState({ day: this.state.newDate });
  }
  render() {
    return (
      <div className="App">
        <Form inline> {/* Setting up the date-picker  */}
          <h2>Input Your Date</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}></FormControl>
          {' '}
          <Button onClick={() => this.changeDate()}>
            Submit
          </Button>
          <CountDown date={this.state.day} /> {/* Sending "date" as a prop to the CountDown Component */}
        </Form>
      </div>
    )
  }
}

export default App;
