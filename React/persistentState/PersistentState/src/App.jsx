import React, { useEffect, useRef } from 'react'

function App() {
  const inputRef=useRef(null);
  useEffect(()=>{
    AutoFocus()
  },[])
  const AutoFocus=()=>{
    inputRef.current.focus()
  }
  return (
    <form method='get'>
      <label>
        Please enter text
        <input type='text' ref={inputRef}/>
      </label>
      <button type='submit' onClick={AutoFocus}>SUBMIT</button>
    </form>
  )
}

export default App