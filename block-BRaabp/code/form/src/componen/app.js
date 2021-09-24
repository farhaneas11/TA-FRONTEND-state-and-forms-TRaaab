import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText:"",
        }
    }
    handleChange=(event) => {
        this.setState({inputText:event.target.value,})
    }
    render() {
        return (
            <>
                <input type="text" id="input" onChange={this.handleChange} value={this.state.inputText}></input>
                <p>{this.state.inputText}</p>
            </>
        );
    }
}
