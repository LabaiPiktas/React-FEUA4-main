import { useEffect, useState } from "react";
import Photo from "../Photo/Photo";
import "./Photos.css";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const photosExists = photos.length > 1; // Add checking if posts exists

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((response) => {
        // Kai yra atnaujinamas state, kodas rerenderinas ir nuskaitomas iš naujo
        setPhotos(response);
      })
      .catch((error) => console.error(error));
    // useEffect hooksas, be dependency array kviečiamas kiekvieną render ciklą
    // useEffect hooksas, su tuščiu dependency array yra paleidžiamas tik vieną kartą
  }, []);

  console.log(photos.url > 1 ? photos[0].title : "");

  return (
    <div className="photos">
      
      {photosExists && (
        <>
          <Photo url={photos[0].url} title={photos[0].title} />
          <Photo url={photos[1].url} title={photos[1].title} />
          <Photo url={photos[2].url} title={photos[2].title} />
        </>
      )}
    </div>
  );
};

export default Photos;
