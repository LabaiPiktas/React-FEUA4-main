
import { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h1>Naujienos</h1>
      {news.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default News;

  