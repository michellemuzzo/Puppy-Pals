import './App.css';
import { puppyList } from './data.js';
import { useState } from 'react';

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null); // Initial value is null

  // Find the puppy with the selected ID
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  console.log("Featured Puppy: ", featuredPup); // Log the selected puppy's details

  return (
    <div className="App">
      {/* Map over the puppies array and return a <p> tag for each puppy's name */}
      {puppies.map((puppy) => {
        return (
          <p 
            key={puppy.id} 
            onClick={() => setFeatPupId(puppy.id)} // Update the selected puppy ID when clicked
          >
            {puppy.name}
          </p>
        );
      })}

      {/* Conditionally render details of the selected puppy */}
      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
