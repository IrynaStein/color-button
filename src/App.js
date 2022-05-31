import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [background, setBackground] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = background === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={{ backgroundColor: background }}
        onClick={() => setBackground(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <label htmlFor="disable-button-checkbox">Disabled button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChacked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
