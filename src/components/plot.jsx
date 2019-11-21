import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import PlotLegend from './plotLegend.js'
import PlotArea from './plotArea.js';

class Plot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        r: '106',
        g: '251',
        b: '42',
        a: '100',
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {

    return (
      <div>
        <PlotLegend
          displayColorPicker={this.state.displayColorPicker}
          color={this.state.color}
          handleClick={this.handleClick}
          handleClose={this.handleClose}
          handleChange={this.handleChange} />

        <PlotArea />
      </div>
    );
  }
}

export default Plot;
