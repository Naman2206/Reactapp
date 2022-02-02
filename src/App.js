import react, { useState } from "react";
import "./styles.css";
// var username = prompt("Give your user name");
var color = "green";
var username = "Naman";
// var clickcounter = 0;
export default function App() {
  const [userinput, setuserinput] = useState("");
  //  const [clickcounter, setclickcounter] = useState(0);
  function inputchangehandler(event) {
    console.log(event.target);
    // setclickcounter(clickcounter+1);
    setuserinput(event.target.value);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {username}</h1>
      {/* <button onClick={clickeventhandler}> Translate</button> */}
      <input onChange={inputchangehandler} />
      <div>Welcome {userinput} </div>
      {/* {clickcounter} */}
    </div>
  );
}
