import React, { Component } from 'react';
import Data from './data.json';
import Modal from './modal';

export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
            movieDetail: {},
        }
    }
    handleMovie=(movie)=>{
        this.setState({
            active: true,
            movieDetail:movie,
        })
        console.log(this.state.movieDetail);
    }
    render() {
        return ( 
            <div>
                {Data.map((movie)=>{ return(
                    <h2 key={movie.Title} onclick={() => this.handleMovie({movie})}>
                        {movie.Title}
                    </h2>
                    )
                })}
                < Modal show={this.state.active} name={this.state.movieDetail}
            </div>  
        )
    }
}
