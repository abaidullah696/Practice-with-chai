import { useState } from 'react'
import './App.css'
import Chai from './chai'
import Card from './Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Chai/>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Soltifire</h1>
       <Card Name = "Asad" Designation = "Frontend developer"/>
       <Card Name = "Ali" Designation = "Backend developer"/>
    </>
  )
}

export default App
