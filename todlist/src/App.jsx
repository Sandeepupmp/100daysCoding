import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdDelete ,MdElectricCar} from "react-icons/md";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo list app for learning
      <MdDelete />
      </h1>
      <MdDelete />
      <MdElectricCar/>
    </>
  )
}

export default App
