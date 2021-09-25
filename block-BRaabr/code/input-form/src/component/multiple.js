import React, { Component } from 'react'

export default class Multiple extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <>
                <form type="text">
                    <label>Text Input :</label>
                    <input type="text"/>
                    <label>Text Input :</label>
                    <input type="text"/>
                    <label>Date :</label>
                    <input type="text"/>
                    <label>File :</label>
                    <input type="file"/>
                    <label>Read only Input :</label>
                    <input type="text" disabled/>
                    <textarea rows="5" placeholder="Textarea" />
                    <textarea rows="5" placeholder="Textarea" disabled/>
                </form>
            </>
        )
    }
}
