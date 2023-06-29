import { useState } from 'react';
import "../components/KgConverter.css"

function KgConverter() {
  const [kilograms, setKilograms] = useState('');
  const [tons, setTons] = useState('');
  const [grams, setGrams] = useState('');
  const [pounds, setPounds] = useState('');

  const handleConversion = () => {
    const kg = parseFloat(kilograms);

    const tonsResult = (kg * 0.001).toFixed(3);
    const gramsResult = (kg * 1000).toFixed(3);
    const poundsResult = (kg * 2.20462262185).toFixed(3);

    setTons(tonsResult);
    setGrams(gramsResult);
    setPounds(poundsResult);
  };

  return (
    <div className='outputTo' >
      <label>
        Kilograms:
        <input
          type="number"
          value={kilograms}
          onChange={(e) => setKilograms(e.target.value)}
        />
      </label>
      <button onClick={handleConversion}>Convert</button>
      <div>
        <p>Tons: {tons} t</p>
        <p>Grams: {grams} g</p>
        <p>Pounds: {pounds} lb</p>
      </div>
    </div>
  );
}



export default KgConverter;
