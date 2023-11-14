import { useState } from "react";
const [selectedColor, setSelectedColor] = useState("");
const Color = (props) => {
  return <div className={props.color}></div>
}
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color = "red" />
        <Color color = "green" />
        <Color color = "black" />
      </div>
    </div>
  );
};

export default App;
