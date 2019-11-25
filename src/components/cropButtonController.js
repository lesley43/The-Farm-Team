import React from 'react';

class CropButtonController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: '175',
      g: '175',
      b: '175',
      a: '100',
    };
    this.cropButtonClicked = this.cropButtonClicked.bind(this);
  }

  cropButtonClicked = () => {
    const chosen = this.state.colorChosen;
    if (this.props.readyToSet === true) {
      let colorR = this.props.color.r;
      let colorG = this.props.color.g;
      let colorB = this.props.color.b;
      let colorA = this.props.color.a;
      this.setState({
        r: colorR,
        g: colorG,
        b: colorB,
        a: colorA,
      })
    }
  }

  render() {

    const data = this.props.data;
    const newArray = this.props.data.button;

    const mapButton = newArray.map( item => {
      return (
        <div>
          <button
            key={item.name}
            type="button"
            className="btn btn-light"
            style={{backgroundColor: `rgba(${ item.color.r }, ${ item.color.g }, ${ item.color.b }, ${ item.color.a })`}}
            onClick={() => {
              this.cropButtonClicked();
              this.props.cropButtonClick();
            }}
            >
            {item.name}
          </button>
        </div>
      )
    })

    return (
      <div>
        {mapButton}
      </div>
    );
  }
}

export default CropButtonController;

/*

onClick={() => this.props.handleSelection(item.color.r, item.color.g, item.color.b, item.color.a)}

*/
