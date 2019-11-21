import React from 'react';

class PlotArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorChosen: {
        r: '0',
        g: '0',
        b: '0',
        a: '0',
      },
    };
    //bind functions here
  }

  render() {
    return(
      <div>
        <div className='row'>
          <h1>Hi! I am the plot area!</h1>
        </div>
        <div className='row'>
          <button type="button" class="btn btn-light"></button>
          <button type="button" class="btn btn-light"></button>
          <button type="button" class="btn btn-light"></button>
        </div>
        <div className='row'>
          <button type="button" class="btn btn-light"></button>
          <button type="button" class="btn btn-light"></button>
          <button type="button" class="btn btn-light"></button>
        </div>
        <div className='row'>
          <button type="button" class="btn btn-light"></button>
          <button type="button" class="btn btn-light"></button>
          <button type="button" class="btn btn-light"></button>
        </div>
      </div>
    )
  }
}

export default PlotArea;
