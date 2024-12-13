import { useState } from 'react'
import './App.css'



const App = () => {
  const [bgColor, setBgColor] = useState('#ffffff'); // Default background color
  const [textColor, setTextColor] = useState('#000000'); // Default text color

  return (
    <div style={{
      color: textColor, backgroundColor: bgColor,
      height: 679,
      width:1525,
      transition: 'background-color 0.3s, color 0.3s',
      textAlign:'center'
    }}>
      <h1 style={{margin:0}}>Color Picker App</h1>
      <label>
        Background Color:
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </label>

      <label>
        Text Color:
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </label>

      <p>This is a sample text with the selected colors!</p>

    </div>
  );
};


export default App
