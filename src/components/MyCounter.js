import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import Button from './Button';

function MyCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {setCount(count + 1)};

  useEffect(() => {
    console.log('Count has changed to: ', count);
  }, [count]);

  const [data, setData] = useState(null);
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div className="MyCounter">
      <Counter count={count}/>
      <Button onClick={increment}/>

      <div>
        {data ? (
          <ul>
            {data.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>

    </div>
  );
}

export default MyCounter;