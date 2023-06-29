import { useState } from "react";
import PropTypes from "prop-types";
import "./MyComponent.css";

const MyComponent = () => {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleApply = () => {
    if (age < 0) {
      setError("Amžius negali būti neigiamas!");
      return;
    }

    const newData = [...data, { age, message }];
    setData(newData);
    setAge("");
    setMessage("");
    setError("");
    setFormSubmitted(true);
  };

  return (
    <div className="my-component">
      {!formSubmitted && (
        <>
          {error && <p className="error">{error}</p>}
          <h2>Amžiaus validavimo forma.</h2>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            placeholder="Įveskite amžių"
          />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Įveskite žinutę"
          />
          <button onClick={handleApply}>Apply</button>
        </>
      )}

      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Amžius</th>
              <th>Žinutė</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.age}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

MyComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

export default MyComponent;
