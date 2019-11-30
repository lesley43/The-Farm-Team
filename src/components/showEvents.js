import React from 'react';

class ShowEvent extends React.Component {

  render() {

    const newData = this.props.data;
    const newArray = newData.event;
    const newDate = this.props.newDate;

    const mapping = newArray.map( item => {
      const itemDate = item.date;
      const itemDetails = item.details;
      if (itemDate === newDate) {
        const result = item.details;
        return (
          <div className="row">
            <div
              className="col-sm-10"
              key={newDate}>
              {result}
              </div>
            <div className="col-sm-2">
            <button type="button"
              class="btn btn-danger"
              id="calendarDeleteEventBtn"
              >Delete</button>
            </div>
          </div>
        )
      }
    })

    return(
      <div className="row">
        <h3>{mapping}</h3>
      </div>

    )
  }



}

export default ShowEvent;
