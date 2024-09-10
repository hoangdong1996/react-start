import React from "react";

class MyComponent extends React.Component {
    state = {
        key: 'tên',
        value : ''
    }

    changeInput = (e) =>  {
        this.setState({
            key: e.target.value
        })
    }
    render() {
        let name = 'namer';
        return (
            <>
                <input type='text' value={this.state.key} onChange={(e) => this.changeInput(e)}></input>
                <span className="class 1">class 1</span>
                <h2>Hi, I am a Car! {name}</h2>
                <h3>Hi, I am a Car! {this.state.key}</h3>
            </>
        );
    }
}

export default MyComponent;