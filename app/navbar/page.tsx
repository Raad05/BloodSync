import Link from "next/link";
import AuthBtn from "../components/AuthBtn/AuthBtn";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <Link href="/" className="nav-logo">BloodSync</Link>
        <div className="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/" className="nav-link">About</Link>
              <Link href="/" className="nav-link">Services</Link>
              <Link href="/"className="nav-link">Blog</Link>
              <Link href="/" className="nav-link">Contact</Link>
            </li>
          </ul>
          <div className="nav-close">
            <i className="ri-close-line"></i>
          </div>
          <div className="nav-buttons">
            <div className="nav-toggle">
              <i className="ri-menu-4-line"></i>
            </div>
          </div>  
        </div>
      </nav>
    </header>
  );
};



export default Navbar;
