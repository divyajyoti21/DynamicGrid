import React from 'react';
function Button(props) {
    function handleChange(event) {
        props.onClick(event.target.id);
    }
    return(
        <button id = {props.id} onClick = {handleChange} className = "customButton">{props.name}</button>
    );
}

export default Button