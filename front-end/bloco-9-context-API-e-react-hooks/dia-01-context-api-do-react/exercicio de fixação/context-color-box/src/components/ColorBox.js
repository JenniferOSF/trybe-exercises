import React from 'react';
import '../styles/box.css';
import colorContext from '../context/ColorsContext';

class ColorBox extends React.Component {
    render() {
        const { nextColor, colors, colorIndex } = this.context;
        return(
            <button
                type="button"
                className="box"
                style={ { backgroundColor: colors[colorIndex] } }
                onClick={() => nextColor()}
            >
                Click me to change my color!
            </button>
        );
    }
};

ColorBox.contextType = colorContext;

export default ColorBox;