import "./Contacts.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Contacts = () => {
  const [enteredUsername, setEnteredUsrename] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  let enteredUsernameIsValid = enteredUsername.trim() !== "";
  let enteredEmailIsValid =
    enteredEmail.trim() !== "" && enteredEmail.includes("@");
  let enteredMessageIsValid = enteredMessage.trim() !== "";

  const submitFormHandler = (event) => {
    event.preventDefault();
    const user = {
      username: enteredUsername,
      email: enteredEmail,
      message: enteredMessage,
    };
  };

  return (
    <>
      <Header />
      <div className="layout">
        <h2>Pateikite atsiliepima apie musu paslaugas</h2>
        <form className="contact-form" onSubmit={submitFormHandler}>
          <div className="form-control">
            <label htmlFor="name">Varda Pavarde</label>
            <input
              id="name"
              type="text"
              value={enteredUsername}
              onChange={(event) => setEnteredUsrename(event.target.value)}
            />
            {/* {!enteredUsernameIsValid && (
              <p className="error-text">Prasome irasyti savo varda!</p>
            )} */}
          </div>
          <div className="form-control">
            <label htmlFor="email">El. pastas</label>
            <input
              id="email"
              type="text"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Irasykite atsiliepima</label>
            <textarea
              id="message"
              type="text"
              rows="4"
              cols="50"
              value={enteredMessage}
              onChange={(event) => setEnteredMessage(event.target.value)}
            />
          </div>
          <div className="actions">
            <button className="btn">Pateikti</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contacts;
