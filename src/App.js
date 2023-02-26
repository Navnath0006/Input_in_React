import react, { useState } from "react";
import "./styles.css";

export default function App() {
  function inputChangeHandler(event) {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <hr></hr>
      <h1>input in react</h1>
      <hr></hr>
      <input onChange={inputChangeHandler}></input>
    </div>
  );
}
