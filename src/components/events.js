import React from 'react';
import ShowEvent from './showEvents.js'

class Events extends React.Component {


  render() {

    const data = this.props.data;

    return (
      <div>
        <h1>{this.props.newDate}</h1>
        < ShowEvent
          data={this.props.data}
          newDate={this.props.newDate}/>
      </div>
    );
  }
}

export default Events;
