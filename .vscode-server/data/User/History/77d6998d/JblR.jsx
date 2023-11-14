import { useState } from "react";
const [selectedColor, setSelectedColor] = useState("");
const Color = (props) => ({color, setSelectedColor}) => {
  return (
    <div
      className={color}
      onclick={() => setSelectedColor(color)}
    ></div>
  )
}

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color = "red" setSelectedColor={setSelectedColor}/>
        <Color color = "green" setSelectedColor={setSelectedColor}/>
        <Color color = "black" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
