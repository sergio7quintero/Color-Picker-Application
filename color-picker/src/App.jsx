import { useState } from "react";
import "./app.css";

const ColorPicker = ({ colors, selectedColor, onSelectColor, onReset }) => {
  return (
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      <div className="color-buttons">
        {colors.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => onSelectColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

const App = () => {
  const colors = ["red", "blue", "green", "yellow"];
  const [selectedColor, setSelectedColor] = useState("white");

  return (
    <div className="app-container">
      <ColorPicker
        colors={colors}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        onReset={() => setSelectedColor("white")}
      />
    </div>
  );
};

export default App;
