import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [start,setStart]=useState(false)
  useEffect(()=>{
    let setTimer= setInterval(()=>{
      if(start){
        setCount((count)=>count+1);
      } 
    },1000)
    return ()=> clearInterval(setTimer)
  },[start])
const handleStart=()=>{
  setStart(true)
}
const handlePause=()=>{
  setStart(false)
  // setCount(count);
  // clearInterval(setTimer)
}
const handlReset=()=>{
  setCount(0)
  setStart(false)
}

  return (
    <>
    <h3>Timer: {count}</h3>
    <button onClick={handleStart}>START</button>
    <button onClick={handlePause}>PAUSE</button>
    <button onClick={handlReset}>RESET</button>
    </>
  )
}

export default App
