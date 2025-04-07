import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [coffee, setCoffee] = useState([])
  async function getData() {
    const url = 'https://api.sampleapis.com/coffee/hot';
    try {
      const response = await fetch(url);
      const json = await response.json();
      setCoffee(json);
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <div className="card">
        {coffee.map((el)=>
        (<div className='coffeeCard'>
          <h1>{el.title}</h1>
          <p>{el.description}</p>
          <ul>
            {el.ingredients.map((el)=>(<li className='list'>{el}</li>))}
          </ul>
          <img className='coffeeImage' src={el.image}/>
          <h4>Price:{el.price}</h4>
          <h4>Total Sales:{el.totalSales}</h4>
        </div>)
        
        
        )}
      </div>
    </>
  )
}

export default App
