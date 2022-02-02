import react, { useState } from "react";
import "./styles.css";
// var username = prompt("Give your user name");
var color = "green";
var username = "Naman";
var clickcounter = 0;
export default function App() {
  const [clickcounter, setclickcounter] = useState(0);
  function clickeventhandler() {
    var newclickcounter = clickcounter + 1;
    setclickcounter(newclickcounter);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {username}</h1>
      <button onClick={clickeventhandler}> Translate</button>
      {clickcounter}
    </div>
  );
}
