import React from 'react';


class ManageEvents extends React.Component {
  constructor(props){
    super(props);

    this.changed = this.changed.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  changed = (e) => {
    this.props.changeEventState(e);
  }

  addEvent = () => {
    this.props.addCalendarEvent();
  }

  render() {

    const newData = this.props.data;
    const newArray = newData.event;
    const newDate = this.props.newDate;
    const newEvent = this.props.newEvent;




    return (
      <div>

        <form>

          <div class="form-group">
            <label for="calendarAddEvent">Add an event:</label>
            <textarea class="form-control"
              id="calendarAddEvent"
              rows="3"
              onChange={this.changed}></textarea>
          </div>
          <button type="button"
            class="btn btn-success"
            id="calendarAddEventBtn"
            onClick={this.addEvent}
            >Add my event</button>
        </form>

        <h3>{this.props.newEvent}</h3>

      </div>
    );
  }
}

export default ManageEvents;
