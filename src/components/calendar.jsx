import React from 'react';
import Calendar from 'react-calendar';
import Events from './events.js'
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
    }

    this.onChange = this.onChange.bind(this);
  }


  onChange = (date) => {
    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    let parsed = mm + '/' + dd + '/' + yy;
    this.setState({ date });
    this.setState({ newDate: parsed});
  }

  render() {

    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />

        <Events
          data={data}
          date={this.props.date}
          newDate={this.state.newDate} />
      </div>
    );
  }
}

export default CalendarPage;
