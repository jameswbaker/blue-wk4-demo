import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick}>Increment</button>
    )
}

export default Button;