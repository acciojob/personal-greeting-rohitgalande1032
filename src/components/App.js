
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");

  const handleOnchange = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
      <label htmlFor="name">Enter your name: </label><br /> <br />
      <input onChange={handleOnchange} value={input} id="name"/>

      <p>{input.length ? `Hello, ${input}!` : ""}</p>
    </div>
  )
}

export default App
