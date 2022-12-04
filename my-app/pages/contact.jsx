import NavBar from "../components/nav-bar";
import { useState } from "react";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      <NavBar />
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const nameLength = name.length < 5;
          const nameEmpty = name.length === 0;
          const emailEmpty = email.length === 0;
          const emailInvalid = !emailRegex.test(email);

          setErrorName(nameLength || nameEmpty);
          setErrorEmail(emailEmpty || emailInvalid);

          const messageSuccess =
            !nameLength && !nameEmpty && !emailEmpty && !emailInvalid;

          setSuccess(messageSuccess);

          if (messageSuccess) {
            console.log(name, email);
          }
        }}
      >
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="Email1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text" //no se usa tipo email, porque la validación se está haciendo en el onsubmit
            className="form-control"
            id="Email1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>

      {(errorName || errorEmail) && (
        <p>Please verified your information again</p>
      )}
      {success && name.length !== 0 && (
        <p>Thank you {name} we will contact with you as soon as possible </p>
      )}
    </>
  );
}
