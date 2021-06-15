import React from 'react';

function ResultDisplay(props) {
    return (
        <React.Fragment>
            {
                props.result && Object.keys(props.result).map(key => (
                    <div className = "resultDisplay">
                        <b>{key}</b> : {props.result[key]}
                    </div>
                ))
            }

        </React.Fragment>

    )
}

export default ResultDisplay