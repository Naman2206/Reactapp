import "./styles.css";
// var username = prompt("Give your user name");
var color = "green";
var username = "Naman";

export default function App() {
  function clickeventhandler() {
    console.log("clicked!");
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {username}</h1>
      <button onClick={clickeventhandler}> Translate</button>
    </div>
  );
}
