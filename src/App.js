import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [background, setBackground] = useState('red');
  const newButtonColor = background === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={{ backgroundColor: background }}
        onClick={() => setBackground(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
