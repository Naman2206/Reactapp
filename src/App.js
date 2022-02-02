import react, { useState } from "react";
import "./styles.css";
// var username = prompt("Give your user name");
var color = "green";
var username = "Naman";
var emojiDictionary = {
  "😀": " Grinning Face",
  "😟": "Worried Face",
  "😕": "Confused Face",
  "🤭": "Face with Hand Over Mouth"
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiinputhandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning = " we don't have database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {username}</h1>
      <input onChange={emojiinputhandler} />
      <h2>Meaning:{meaning}</h2>
    </div>
  );
}
