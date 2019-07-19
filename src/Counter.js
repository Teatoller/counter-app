import React from 'react'

function Counter(props) {
    return (
        <div>
            <h1>Mega Counter!</h1>
            <p>Count: {props.count} </p>
            <button>Click to Increment</button>
        </div>
    )
}

export default Counter;
