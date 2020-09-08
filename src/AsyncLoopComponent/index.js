import React from "react";
import {incrementCounter} from "../redux/Counter/counter.actions";
import {connect} from "react-redux";

class AsyncLoopComponent extends React.Component {
    constructor(props){
        super(props);
        // Constructor will be called twice because redux.Connect() is a HOC!!!
        console.log("CONSTRUCTED!");
    }
    componentDidMount() {
        setInterval(
            () => this.props.incrementCounter(), 1000
        );
    }

    render() {
        return(
            <div className="wrapperino">
                <h2>Our App has updated:</h2>
                <h2>{this.props.counter}</h2>
                <h2>times!!</h2>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        counter: state.counter_state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCounter: () => dispatch(incrementCounter())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AsyncLoopComponent);