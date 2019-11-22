import React from 'react';

class PlotArea extends React.Component {

  render() {

    const plotStyle = {
      height: "30px",
      width: "30px",
      border: "2px solid black"
    }

    return(
      <div>
        <div className='row'>
          <h1>Hi! I am the plot area!</h1>
        </div>
        <div className='row'>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
        </div>


        <div className='row'>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
        </div>


        <div className='row'>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
          <div
            className="btn btn-warning"
            style={plotStyle}
            onClick={this.props.colorPlot}>
          </div>
        </div>
      </div>
    )
  }
}

export default PlotArea;
