import React, { useEffect, useState } from "react";
import MyComponent from "./components/MyComponent";
import MyToDo from "./components/MyToDo";

const App = () => {
  const [posts] = useState([]);

  useEffect(() => {
    // Your code logic for fetching posts or any other initialization
  }, []);

  return (
    <div>
      <MyComponent posts={posts} />

      <div>
        <h1>My To-Do</h1>
        <MyToDo />
      </div>
    </div>
  );
};

export default App;
