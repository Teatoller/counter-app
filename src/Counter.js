import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    console.log('render props...', props);
    return (
        <div>
            <h1>Mega Counter!</h1>
            <p>Count: {props.count} </p>
            <button onClick={props.onIncremenClick}>Click to Increment</button>
            <button onClick={props.onDecremenClick}>Click to Decrement</button>
        </div>
    )
}

function mapStateToProps (state) {
    console.log("mapStateToProps >>>", state);
    return {
        count: state.count
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onIncremenClick: ()=> {
            console.log("Clicking....");
            const action = {
                type: 'INCREMENT',
            }
            dispatch(action);
        },
        onDecremenClick: ()=> {
            console.log("Clicking....");
            const action = {
                type: 'DECREMENT',
            }
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
