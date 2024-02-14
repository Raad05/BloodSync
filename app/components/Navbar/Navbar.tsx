import Link from "next/link";
import AuthBtn from "../AuthBtn/AuthBtn";
import { Rasa } from "next/font/google";
import styles from "./Navbar.module.css";

const rasa = Rasa({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav
      className={`${rasa.className} header-section flex justify-around items-center py-5 text-2xl`}
    >
      <Link href="/" className="nav-logo italic">
        BloodSync
      </Link>
      <div className="nav-links" style={{ fontWeight: 500 }}>
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
