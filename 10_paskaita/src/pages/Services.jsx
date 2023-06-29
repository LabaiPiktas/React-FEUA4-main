
const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Paslauga 1',
      description: 'Ši paslauga teikia įvairius funkcionalumus.',
    },
    {
      id: 2,
      title: 'Paslauga 2',
      description: 'Ši paslauga padeda jums pasiekti tikslus.',
    },
    {
      id: 3,
      title: 'Paslauga 3',
      description: 'Ši paslauga suteikia aukštos kokybės paslaugas.',
    },
  ];

  return (
    <div>
      <h1>Paslaugos</h1>
      <div className="services-container">
        {servicesData.map(service => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
