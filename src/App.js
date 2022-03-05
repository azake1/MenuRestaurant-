import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import { Basket } from "./components/basket";

import { FoodCard } from "./components/foodCard";

import {menu} from "./assets/data"
function App(){
const getData = ()=>{
  try{
    setTimeout(async()=>{
    let response = await axios.get("https://mocki.io/v1/f1e70c93-5efd-42ea-91e5-009d6ad81bab")
setFoodList(response.data.foods)
setIsLoading(false)
    },1000)
  } catch (error){

  }
}

  const [isLoading,setIsLoading] = useState(true)
  const [selectedCategory, setSelectedCategory]= useState("")
  const [foodList,setFoodList] = useState([])
  const [filteredFoodList,setFilteredFoodList] = useState([])
  const [basketFoodList,setBacketFoodList] = useState([])

  useEffect(()=>{
    let list = menu.filter(food=>(
      selectedCategory === food.category 
      || selectedCategory === "" 
      || selectedCategory === "all"))
      setFilteredFoodList(list)
  },[selectedCategory])

  useEffect(()=>{
    getData()
  },[])//componentDidMount

  let catList = ["all", ... new Set(foodList.map(item=>item.category))]

 return(
    <div className="App">
      <h1>Our Menu</h1>
      {
            isLoading ? <p>Loading</p> : <div>
              <Basket basketFoodList/>
          {
                catList.map(category => <button key={category} onClick ={()=>setSelectedCategory(category)}>{category}</button>)
      }
   
      {
        filteredFoodList.map(food=>
          <FoodCard key={food.id} food={food}/>)
        }
      </div>
    }
    </div>
  )
}
      
export default App;

