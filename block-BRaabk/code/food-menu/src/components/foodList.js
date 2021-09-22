//import FoodTag from './foodTag';
function FoodList(props) {
    return (
        <ul className="cards flex">
            {props.everyfood.map((food) => {
                return (
                    <li key={food}>                        
                        <h2>{food.title}</h2>
                        <h3>{food.price}</h3>
                        <p>{food.desc}</p>
                        <button>Click</button>                        
                    </li>
                )
            })}
        </ul>
    )
}
export default FoodList;