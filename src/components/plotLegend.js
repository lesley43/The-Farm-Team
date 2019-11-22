import React from 'react';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';

class PlotLegend extends React.Component {

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

    const data = this.props.data;
    const newArray = this.props.data.button;

    const mapButton = newArray.map( item => {
      return (
        <button
          key={item.name}
          type="button"
          className="btn btn-light"
          style={{backgroundColor: `rgba(${ item.color.r }, ${ item.color.g }, ${ item.color.b }, ${ item.color.a })`}}
          onClick={() => this.props.handleSelection(item.color.r, item.color.g, item.color.b, item.color.a)}
          >
          {item.name}
        </button>
      )
    })

    const clearStyle = {
      backgroundColor: `rgba(${ this.props.clearColor.r }, ${ this.props.clearColor.g }, ${ this.props.clearColor.b }, ${ this.props.clearColor.a })`,
      color: "black"
    }

    return(
      <div>
        <div className="row">

          <div style={ styles.swatch }
            onClick={ this.props.handleClick }>
            <div style={ styles.color } />
          </div>
          { this.props.displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ this.props.handleClose }/>
            <SketchPicker color={ this.props.color } onChange={ this.props.handleChange } />
          </div> : null }

        </div>


          {mapButton}

          <button
            type="button"
            className="btn btn-dark"
            style={clearStyle}
            onClick={this.props.handleSelection}>
            Clear selection
          </button>

      </div>
    )
  }
}

export default PlotLegend;


//onClick={this.handleSelection(${ item.color.r }, ${ item.color.g }, ${ item.color.b }, ${ item.color.a })}
