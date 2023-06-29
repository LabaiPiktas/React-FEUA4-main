import React, { useEffect, useState } from 'react';
import "../components/MyComponent.css";
import Button from './Button';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulate fetching data from the API
      const response = await fetch('https://golden-whispering-show.glitch.me/');
      const jsonData = await response.json();
      
      // Save the data in useState and mark that loading text is no longer needed
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    // Remove the item by updating the useState data with a filtered array
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div className="card-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>€{item.price}</p>
                <Button onClick={() => handleDelete(item.id)}>Delete</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyComponent;
