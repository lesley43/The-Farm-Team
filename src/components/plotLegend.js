import React from 'react'
import CropButtonController from './cropButtonController.js'

class PlotLegend extends React.Component {

  render() {

    const data = this.props.data;

    return(
      <div>
        <CropButtonController
        data={data}
        readyToSet={this.props.readyToSet}
        colorChosen={this.props.colorChosen}
        cropButtonClick={this.props.cropButtonClick} />
      </div>
    )
  }
}

export default PlotLegend;
