import { useState } from 'react'
import './App.css'
import Chai from './chai'
function App() {
  const [count, setCount] = useState(0)
  const changeValue = ()=>{
    if (count<20){
    setCount(count + 1)
  }
}
  const removeValue = ()=> {
    if (count>0){
    setCount(count - 1)
  }
}
  return (
    <>
      <Chai/>
      <h1>Counter value is {count}</h1>
      <button onClick={changeValue} className='addButton'>Add value {count}</button>
      <button onClick={removeValue} className='removeButton'>Remove value {count}</button>
    </>
  )
}

export default App
