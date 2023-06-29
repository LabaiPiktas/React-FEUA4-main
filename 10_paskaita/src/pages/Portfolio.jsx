
const Portfolio = () => {
  const worksData = [
    { id: 1, image: 'image1.jpg' },
    { id: 2, image: 'image2.jpg' },
    { id: 3, image: 'image3.jpg' },
    { id: 4, image: 'image4.jpg' },
    { id: 5, image: 'image5.jpg' },
    { id: 6, image: 'image6.jpg' },
    { id: 7, image: 'image7.jpg' },
    { id: 8, image: 'image8.jpg' },
  ];

  return (
    <div>
      <h1>Atlikti darbai</h1>
      <div className="works-container">
        {worksData.map(work => (
          <div key={work.id} className="work-item">
            <img src={work.image} alt={`Work ${work.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
