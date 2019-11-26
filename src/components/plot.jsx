import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import PlotArea from './plotArea.js'
import CropButtonController from './cropButtonController.js'
import PlotLegend2 from './plotLegend2.js'
import data from '../data/buttonColor.json'

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      readyToSet: false,
      color: {
        r: '175',
        g: '175',
        b: '175',
        a: '100',
      },
      clearColor: {
        r: '235',
        g: '235',
        b: '235',
        a: '100',
      },
      colorChosen: {
        r: '235',
        g: '235',
        b: '235',
        a: '100',
      },
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setReady = this.setReady.bind(this);
    this.cropButtonClick = this.cropButtonClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  setReady = () => {
    this.setState({ readyToSet: true});
    console.log("from setReady function: ");
    console.log(this.state.readyToSet);
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker }, this.setReady)
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
    console.log("from handlechange: ");
    console.log(this.state.color);
  };

  cropButtonClick = () => {
    this.setState({ readyToSet: false});
  }

  handleClear = () => {
    let chosenR = this.state.clearColor.r;
    let chosenG = this.state.clearColor.g;
    let chosenB = this.state.clearColor.b;
    let chosenA = this.state.clearColor.a;
    this.setState({
      colorChosen: {
        r: chosenR,
        g: chosenG,
        b: chosenB,
        a: chosenA,
      }
    });
    console.log("colorChosen: is");
    console.log(this.state.colorChosen);
  };

  render() {

    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }

    const clearStyle = {
      backgroundColor: `rgba(${ this.state.clearColor.r }, ${ this.state.clearColor.g }, ${ this.state.clearColor.b }, ${ this.state.clearColor.a })`,
      color: "black"
    }


    return (
      <div>
        <div className="row">

          <div className="col-md-3">
            <button onClick={ this.handleClick }>Pick Color</button>
            { this.state.displayColorPicker ? <div style={ popover }>
              <div style={ cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.color } onChange={ this.handleChange }/>
              </div> : null }
          </div>

          <div className="col-md-8">
            <PlotLegend2
            data={data}
            readyToSet={this.state.readyToSet}
            color={this.state.color}
            clearColor={this.state.clearColor}
            colorChosen={this.state.colorChosen}
            cropButtonClick={this.cropButtonClick} />
          </div>

          <div className="col-md-1">
          <button
            type="button"
            className="btn btn-dark"
            style={clearStyle}
            onClick={this.handleClear}>
            Clear selection
          </button>
          </div>

        </div>

        <PlotArea
          colorChosen={this.state.colorChosen} />

      </div>
    );
  }
}

export default Plot;


/*
this.colorPlot = this.colorPlot.bind(this);

<PlotArea
  colorPlot={this.colorPlot} />

  import PlotLegend from './plotLegend.js'


  <PlotLegend
    displayColorPicker={this.state.displayColorPicker}
    color={this.state.color}
    clearColor={this.state.clearColor}
    handleClick={this.handleClick}
    handleClose={this.handleClose}
    handleChange={this.handleChange}
    handleClear={this.handleClear}
    data={data} />

*/
