import React from 'react';
import PropTypes from 'prop-types';
import {TextElement} from './Text.styles';

const Text = ({ children, fontSize, fontColor }) => {
    return(
        <TextElement 
            fontSize={fontSize}
            fontColor={fontColor}>
                {children}
        </TextElement>
    );
};

Text.PropTypes = {
    fontSize: PropTypes.string,
    fontColor: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Text.defaultProps = {
    fontSize: '10px',
    fontColor: 'brown'
};

export default Text;