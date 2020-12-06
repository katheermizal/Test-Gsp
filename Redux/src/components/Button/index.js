import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';


const Button = ({children, className, onClick}) => {
    return(
        <button className ={ className } onClick= { onClick }>{ children }</button>
    );
};
 
Button.PropTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Button;