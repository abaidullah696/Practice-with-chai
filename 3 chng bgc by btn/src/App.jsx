import { useState } from 'react'
import './App.css'
import Chai from './chai'
function App() {
  const [color, setColor] = useState("red")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-0 px-2'>
        test
      </div>


    </div>
  )
}

export default App
