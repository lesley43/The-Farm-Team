import React from 'react';
import Calendar from 'react-calendar';
import Events from './events.js'
import ManageEventsButton from './manageEventsButton.js'
import data from '../data/calEvents.json'

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    let today = new Date();
    let yy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let parsed = mm + '/' + dd + '/' + yy;

    this.state = {
      date: new Date(),
      newDate: parsed,
      newEvent: "",
    }

    this.onChange = this.onChange.bind(this);
    this.changeEventState = this.changeEventState.bind(this);
    this.addCalendarEvent = this.addCalendarEvent.bind(this);
  }


  onChange = (date) => {
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let parsed = mm + '/' + dd + '/' + yy;
    this.setState({ date });
    this.setState({ newDate: parsed});
  }

  changeEventState = (e) => {
    let input = e.target.value;
    this.setState({ newEvent: input});
  }

  addCalendarEvent = () => {
    let eventDate = this.state.newDate;
    let logEvent = this.state.newEvent;
    let thisNewEvent = {
      date: eventDate,
      details: logEvent
    };
    console.log("newDate: " + this.state.newDate);
    console.log("newEvent: " + this.state.newEvent);
    alert("check the log! It will show the state!")
  }

  render() {

    return (
      <div className="sectionDark cards">
        <div className="row addSpace">

        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />

        <Events
          data={data}
          date={this.props.date}
          newDate={this.state.newDate} />

        </div>

        <ManageEventsButton
          data={data}
          date={this.state.date}
          newDate = {this.state.newDate}
          newEvent = {this.state.newEvent}
          changeEventState={this.changeEventState}
          addCalendarEvent={this.addCalendarEvent}
          />

      </div>
    );
  }
}

export default CalendarPage;
