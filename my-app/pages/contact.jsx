import H2 from "../components/h2";
import P from "../components/p";
import Label from "../components/label";
import NavBar from "../components/nav-bar";
import { useContext, useState } from "react";
import globalContext from "../context/global-context";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Contact() {
  const state = useContext(globalContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className={`min-vh-100 ${state.isDark ? "bg-dark" : "bg-body"} `}>
      <NavBar />
      <main className="container">
        <H2>Want to know more?</H2>
        <P>Send us your questions and we will contact you</P>

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
            <Label htmlFor="name">Name</Label>
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
            <Label htmlFor="Email1">Email address</Label>
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
          <P>Please verified your information again</P>
        )}
        {success && name.length !== 0 && (
          <P>Thank you {name} we will contact with you as soon as possible </P>
        )}
      </main>
    </div>
  );
}
