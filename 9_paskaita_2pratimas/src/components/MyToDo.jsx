import { useState, useEffect } from 'react';
import Button from './Button';

function MyToDo() {
  const [mySavedToDo, setMySavedToDo] = useState([]);
  const [myInput, setMyInput] = useState('');

  useEffect(() => {
    const mySavedToDo = localStorage.getItem('mySavedToDo');
    if (mySavedToDo) {
      setMySavedToDo(JSON.parse(mySavedToDo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mySavedToDo', JSON.stringify(mySavedToDo));
  }, [mySavedToDo]);

  const addToDo = () => {
    setMySavedToDo([...mySavedToDo, myInput]);
    setMyInput('');
  };

  const deleteToDo = (index) => {
    const newToDo = [...mySavedToDo];
    newToDo.splice(index, 1);
    setMySavedToDo(newToDo);
  };

  return (
    <div>
      <input type="text" value={myInput} onChange={(e) => setMyInput(e.target.value)} />
      <Button onClick={addToDo}>Submit</Button>

      <ul>
        {mySavedToDo.map((task, index) => (
          <li key={index}>
            {task}
            <Button onClick={() => deleteToDo(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyToDo;
