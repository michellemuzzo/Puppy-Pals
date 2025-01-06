import './App.css';
import { puppyList } from './data.js';
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);

  return (
    <div className="App">
      {/* Map over the puppies array and return a <p> tag for each puppy's name */}
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;
