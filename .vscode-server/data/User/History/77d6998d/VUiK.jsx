import { useState } from "react";
import React from "react"


  const Color = ({color, setselectedColor}) => {
  return (
    <div
    className={color}
    onClick={()=> setselectedColor(color)}
    ></div>
  )
  }


const App = () => { const [selectedColor, setselectedColor] = useState ("")
  return (
    
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red"setselectedColor={setselectedColor}/>
        <Color color="blue"setselectedColor={setselectedColor}/>
        <Color color="yellow"setselectedColor={setselectedColor}/>
      </div>
    </div>
  );
};

export default App;
