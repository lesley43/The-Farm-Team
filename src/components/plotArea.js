import React from 'react';
import PlotDiv from './plotDiv.js'

class PlotArea extends React.Component {

  render() {

    return(
      <div>

        <div className='row'>

          <PlotDiv
            colorChosen={this.props.colorChosen} />

          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
        </div>


        <div className='row'>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
        </div>


        <div className='row'>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
        </div>

        <div className='row'>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
        </div>

        <div className='row'>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
        </div>

        <div className='row'>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
          <div
            className="btn btn-warning"

            onClick={this.colorPlot}>
          </div>
        </div>


      </div>
    )
  }
}

export default PlotArea;
