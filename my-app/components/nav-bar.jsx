import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="navbar-brand col-sm-9">DH Odonto</div>
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/favs">
            Favs
          </Link>
        </li>
      </ul>
    </nav>
  );
}
