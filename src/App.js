import react, { useState } from "react";
import "./styles.css";
// var username = prompt("Give your user name");
var color = "green";
var username = "Naman";
var shoppingList = ["milk", "Flowers", "Dhaniya", "lemon", "rava"];
export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {username}</h1>
      <h2>Shoping list</h2>
      <ul>
        {shoppingList.map((item) => {
          console.log(item);
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
