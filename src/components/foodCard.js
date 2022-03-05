import {useState} from "react"
export const FoodCard =({food})=>{
        const [count, setCount] = useState(1)

    
return(
  <div>
      <p>{food.title}</p>
      <button
      onClick={()=>setCount(count>1?count -1: 1)}
      >-</button>
      <span>{count}</span>
      <button onClick={()=>setCount(count+1)}>
          +</button>
          <button>Order</button>
  </div>
)
    }

