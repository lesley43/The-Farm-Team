import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import PlotArea from './plotArea.js'
import PlotLegend from './plotLegend.js'
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
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker }, this.setReady)
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({
      color: color.rgb,
      colorChosen: color.rgb,
    })
  };

  cropButtonClick = (red, gre, blu, tr) => {
    this.setState({
      readyToSet: false,
      colorChosen: {
        r: red,
        g: gre,
        b: blu,
        a: tr,
      }
    });
  }

  handleClear = () => {
    this.setState({
      colorChosen: {
        r: "235",
        g: "235",
        b: "235",
        a: "100",
      }
    });
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
      backgroundColor: `rgba(235, 235, 235, 100)`,
      color: "black"
    }


    return (
      <div>
        <div className="row sectionDark cards">

          <div className="col-sm-3">
            <button
              type="button"
              className="btn btn-info"
              onClick={ this.handleClick }>Pick Color</button>
            { this.state.displayColorPicker ? <div style={ popover }>
              <div style={ cover } onClick={ this.handleClose }/>
              <SketchPicker color={ this.state.color } onChange={ this.handleChange }/>
              </div> : null }
            <button
              type="button"
              className="btn btn-secondary">
              Add Crop
            </button>
          </div>

          <div className="col-sm-7">
            <PlotLegend
            data={data}
            readyToSet={this.state.readyToSet}
            colorChosen={this.state.colorChosen}
            cropButtonClick={this.cropButtonClick} />
          </div>

          <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-dark"
            style={clearStyle}
            onClick={this.handleClear}>
            Clear
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
