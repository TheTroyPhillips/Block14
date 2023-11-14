import { useState } from "react";
import React from "react";

const Color = ({color, setselectedColor}) => {
  return (
    <div
    className={color}
    onClick={()=> setselectedColor(color)}
    ></div>
  )
  }
const App = () => { const [selectedColor, setSelectedColor] = useState ("")
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
