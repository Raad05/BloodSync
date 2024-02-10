import Link from "next/link";
import "./navbar.css";
import AuthBtn from "../AuthBtn/AuthBtn";

const Navbar = () => {
  return (
    <nav className="header-section flex justify-around items-center py-3 border">
      <Link href="/">Home</Link>
      <div className="nav-links">
        <Link className="mx-5" href="/">
          Home
        </Link>
        <Link className="mx-5" href="/">
          Donate
        </Link>
        <Link className="mx-5" href="/">
          Locations
        </Link>
        <Link className="mx-5" href="/">
          Request
        </Link>
      </div>
      <AuthBtn></AuthBtn>
    </nav>
  );
};

export default Navbar;
