import NavBar from "../components/nav-bar";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(false);

  return (
    <>
      <NavBar />
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setErrorName(name.length < 5);
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
            type="email"
            className="form-control"
            id="Email1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>

      {errorName && <p>Por favor verifique su información nuevamente</p>}
    </>
  );
}
