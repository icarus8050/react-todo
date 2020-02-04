import React, {Component} from "react";

class Counter extends Component {

    state = {
        number: 0
    };

    handleIncrease = () => {
        this.setState(
            ({number}) => ({
                number: number + 1
            })
        );
    };

    handleDecrease = () => {
        this.setState(
            state => ({
                number: state.number - 1
            })
        );
    };

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
            </div>
        );
    }
}

export default Counter;