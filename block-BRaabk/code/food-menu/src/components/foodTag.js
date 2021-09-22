import React, { Component } from 'react';
import data from '../data.json';
// eslint-disable-next-line no-unused-vars
import FoodList from './foodList';

export default class FoodTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeFood:"",
        };
    }
    handleClick = (food) => {
        this.setState({activeFood:food,});
    };
    render() {
        let foodCat = data.map(food => food.category);
        let foodCategory = foodCat.filter((val,id,array) => array.indexOf(val) === id);
        //console.log(foodCategory);
        var everyfood ;
        if(!this.state.activeFood) {
            everyfood = data.reduce((acc,food) => {
                acc = acc.concat(food.category);
                return acc;                
            },[]);
        }
        else{
            // eslint-disable-next-line no-unused-vars
            everyfood = data.find((food)=> food.category === this.state.activeFood).FoodList;
            console.log(everyfood)
        }
        return (
            <>
                <ul className="flex container">
                {foodCategory.map((food) =>
                    <li
                        key={food}
                        className={food === this.state.activeFood ?"active":""}
                        onClick={()=>this.handleClick(food)}
                    >
                        {food}    
                    </li>
                )}
                </ul>
                <FoodList everyfood ={everyfood} />                
            </>            
        )
    }
}
