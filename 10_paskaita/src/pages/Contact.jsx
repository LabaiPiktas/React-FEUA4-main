import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Čia galite įtraukti kodą, kuris siųs kontaktų formos duomenis į serverį arba kitą reikiamą veiksmą

    // Išvalyti formos laukus
    setName('');
    setEmail('');
    setMessage('');

    // Nustatyti, kad forma buvo pateikta
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Kontaktai</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label>
            Vardas:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            El. paštas:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Žinutė:
            <textarea value={message} onChange={e => setMessage(e.target.value)} />
          </label>
          <button type="submit">Siųsti</button>
        </form>
      ) : (
        <p>Ačiū už pateikimą!</p>
      )}
    </div>
  );
};

export default Contact;
