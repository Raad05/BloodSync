import Link from "next/link";
import AuthBtn from "../components/AuthBtn/AuthBtn";

const Navbar = () => {
  return (
    <div className="navbar flex justify-around items-center py-5">
      <p>Logo</p>
      <div className="navigation flex">
        <Link className="mx-5 p-2" href="/">
          Home
        </Link>
        <Link className="mx-5 p-2" href="/donate">
          Donate
        </Link>
        <Link className="mx-5 p-2" href="/locations">
          Locations
        </Link>
        <Link className="mx-5 p-2" href="/request">
          Request
        </Link>
      </div>
      <AuthBtn></AuthBtn>
    </div>
  );
};

export default Navbar;
