import { useState } from "react";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiatės?");

  const handleButtonClick = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={() => handleButtonClick("Nieko tokio, viskas bus gerai.")}>Jaučiuosi prastai : (</button>
      <button onClick={() => handleButtonClick("Gerai, nujaučiu, greitu metu jausitės puikiai.")}>Jaučiuosi normaliai : |</button>
      <button onClick={() => handleButtonClick("Smagu girdėti, taip ir toliau.")}>Jaučiuosi puikiai : )</button>
    </div>
  );
};

export default MoodChecker;
