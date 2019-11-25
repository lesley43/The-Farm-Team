import React from 'react'
import CropButtonController from './cropButtonController.js'

class PlotLegend2 extends React.Component {

  render() {

    const data = this.props.data;

    const clearStyle = {
      backgroundColor: `rgba(${ this.props.clearColor.r }, ${ this.props.clearColor.g }, ${ this.props.clearColor.b }, ${ this.props.clearColor.a })`,
      color: "black"
    }

    return(
      <div>
        <CropButtonController
        data={data}
        readyToSet={this.props.readyToSet}
        color={this.props.color}
        clearColor={this.props.clearColor}
        colorChosen={this.props.colorChosen}
        cropButtonClick={this.props.cropButtonClick} />
      </div>
    )
  }
}

export default PlotLegend2;

/*

const data = this.props.data;
const newArray = this.props.data.button;

const mapButton = newArray.map( item => {
  return (
    <div>
      <ColorPicker />

      <button
        key={item.name}
        type="button"
        className="btn btn-light"
        style={{backgroundColor: `rgba(${ item.color.r }, ${ item.color.g }, ${ item.color.b }, ${ item.color.a })`}}
        onClick={() => this.props.handleSelection(item.color.r, item.color.g, item.color.b, item.color.a)}
        >
        {item.name}
      </button>
    </div>
  )
})

*/
