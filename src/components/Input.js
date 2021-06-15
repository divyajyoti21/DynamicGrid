import React from 'react';
function Input(props) {
    function handleChange (event) {
        props.onChange(event.target.value);
    }
    return (
        <input type = "text" className = "inputStyle" onChange = {handleChange} />
    )
}

export default Input;