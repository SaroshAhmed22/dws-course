import { React, useState } from "react";
import Component1 from './Component1'
import Header from './Components/Header'
import Footer from './Components/Footer';

const App = () => {

  const [count, setcount] = useState(0)

  const inc = () => {
    console.log("I am Called")
    setcount(count + 1)

  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>Increment</button>
    </div>
  )
}

export default App