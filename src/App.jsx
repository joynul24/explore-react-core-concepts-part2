import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";
import Persons from "./Persons";

function App() {

  function hangleClick() {
    alert("button clicked");
  }

  function hangleClick2() {
    alert("button clicked 2");
  }


  const addToFive = (num) => {
    alert(num + 5)
  }

  const mainusFive = (num) => {
    alert(num - 5 )
  }


  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Persons></Persons>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={hangleClick}>Click Me</button>

      <button onClick={hangleClick2}>Click 2</button>

      <button onClick={() => {alert("third btn clicked")}}>Third Click</button>

      <button onClick={()=> addToFive(5)}>Five</button>

      <button onClick={() => mainusFive(12)}>-Five</button>
    </>
  );
}

export default App;
