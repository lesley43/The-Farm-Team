import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import PlotLegend from './plotLegend.js'
import PlotArea from './plotArea.js';
import data from '../data/buttonColor.json'

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
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
        text: 'black',
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
    this.handleSelection = this.handleSelection.bind(this);
    this.colorPlot = this.colorPlot.bind(this);
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  handleSelection = (r, g, b, a) => {
    let chosenr = this.state.colorChosen.r;
    let choseng = this.state.colorChosen.g;
    let chosenb = this.state.colorChosen.b;
    let chosena = this.state.colorChosen.a;
    console.log(r);
    this.setState({
      colorChosen: {
        r: r,
        g: g,
        b: b,
        a: a,
      }
    });
    console.log("colorChosen: is");
    console.log(this.state.colorChosen);
  };

  colorPlot = () => {
    console.log("clicked!");
    style=backgroundColor: `rgba(${ this.state.colorChosen.r }, ${ this.state.colorChosen.g }, ${ this.state.colorChosen.b }, ${ this.state.colorChosen.a })`
  }

  render() {

    return (
      <div>
        <PlotLegend
          displayColorPicker={this.state.displayColorPicker}
          color={this.state.color}
          clearColor={this.state.clearColor}
          handleClick={this.handleClick}
          handleClose={this.handleClose}
          handleChange={this.handleChange}
          handleSelection={this.handleSelection}
          data={data} />

        <PlotArea
          colorPlot={this.colorPlot} />
      </div>
    );
  }
}

export default Plot;


//handleSelection
