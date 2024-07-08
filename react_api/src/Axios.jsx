import { useState, useEffect } from "react";
import axios from 'axios'

const Axios = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => {
            setMeals(res.data.meals);
        })
    },[])
    return (
        <div>
            {meals.map((meal) => (
                <img src={meal.strMealThumb} key={meal.idMeal} alt={meal.strMeal} width={400} />
            ))}
        </div>
    )
}

export default Axios;