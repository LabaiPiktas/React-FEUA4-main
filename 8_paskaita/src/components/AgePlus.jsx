import React, { useState } from 'react';
import "../components/AgePlus.css"

function AgePlus() {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleAddTenYears = () => {
    const currentAge = parseInt(age);
    const newAge = currentAge + 10;
    setAge(newAge);
  };

  return (
    <div className='container' >
      <label className='label' >
        First Name:
        <input
        className='input-field'
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      
      <label className='label' >
        Age:
        <input 
        className='input-field' type="number" value={age} onChange={handleAgeChange} />
      </label>
      
      <button className='button' onClick={handleAddTenYears}>Add 10 Years</button>
     
      <h2 className='result' >{firstName}</h2>
      <p className='result' >Your age is {age}</p>
    </div>
  );
}

export default AgePlus;
