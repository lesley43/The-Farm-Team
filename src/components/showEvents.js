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
          <div key={newDate}>{result}</div>
        )
      }
    })

    return(
      <div>
        <h3>{mapping}</h3>
      </div>

    )
  }



}

export default ShowEvent;
