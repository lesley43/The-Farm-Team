import React from 'react';
import Calendar from 'react-calendar';

class Events extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {

    console.log("from events: ", this.props.date);

    console.log("from events: ", this.props.newDate);

    return (
      <div>
        <h1>{this.props.newDate}</h1>

      </div>
    );
  }
}

export default Events;
