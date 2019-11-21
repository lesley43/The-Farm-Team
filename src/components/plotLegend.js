import React from 'react';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';

class PlotLegend extends React.Component {

  var Button = React.createClass({
    getInitialState: function() {
      return {
        bgColor: 'green'
      }
    },
  })

  render() {
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.props.color.r }, ${ this.props.color.g }, ${ this.props.color.b }, ${ this.props.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return(
      <div>
        <h1>Hi! Im the legend!</h1>
        <div className="row">
          <div style={ styles.swatch } onClick={ this.props.handleClick }>
            <div style={ styles.color } />
          </div>
          { this.props.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.props.handleClose }/>
            <SketchPicker color={ this.props.color } onChange={ this.props.handleChange } />
          </div> : null }
          <button type="button" class="btn btn-primary">Broccoli</button>
        </div>

      </div>
    )
  }
}

export default PlotLegend;
