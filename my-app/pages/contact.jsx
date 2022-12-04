import NavBar from "../components/nav-bar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>

      <form>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div>
          <label htmlFor="Email1" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="Email1" />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </>
  );
}
