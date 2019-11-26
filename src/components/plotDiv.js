import React from 'react'
import PlotArea from './plotArea.js'

class PlotDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: '235',
      g: '235',
      b: '235',
      a: '100',
    };
    this.colorPlot = this.colorPlot.bind(this);
  };

  colorPlot = () => {
    console.log("props r: ");
    console.log(this.props.r);
    let colorR = this.props.r;
    let colorG = this.props.g;
    let colorB = this.props.b;
    let colorA = this.props.a;
    console.log(colorR);
    console.log("im running");
    console.log(this.state);
    this.setState({
      r: colorR,
      g: colorG,
      b: colorB,
      a: colorA,
    })
    console.log(this.state);
  }

  render() {

        const plotStyle = {
          height: "50px",
          width: "50px",
          border: "2px solid black",
          backgroundColor: `rgba(${ this.state.r }, ${ this.state.g }, ${ this.state.b }, ${ this.state.a })`
        }

    return (
      <div>
        <div
          style={plotStyle}
          onClick={this.colorPlot}>
        </div>
      </div>

    );
  }
}


export default PlotDiv;
