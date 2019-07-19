import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    return (
        <div>
            <h1>Mega Counter!</h1>
            <p>Count: {props.count} </p>
            <button>Click to Increment</button>
        </div>
    )
}

function mapStateToProps (state) {
    console.log("mapStateToProps >>>", state);
    return {
        count: state.count
    }
};

export default connect(mapStateToProps)(Counter);
