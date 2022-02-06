import react, { useState } from "react";
import "./styles.css";
var username = prompt("Give your user name");
var color = "green";
var userLogedIN = true;
export default function App() {
  function getuserMessage() {
    if (userLogedIN) {
      return username;
    }
    return "user!";
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {getuserMessage()} </h1>
    </div>
  );
}
