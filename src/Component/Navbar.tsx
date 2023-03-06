import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { NavStyle } from "./NavbarStyle";

const Navbar = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  return (
    <>
      <NavStyle className="navbar">
        <Link to="/" className="logo">
          ITT
        </Link>
        <ul
          className={mobileNavbar ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobileNavbar(false)}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/services">
            <li>Services</li>
          </Link>
          <Link to="/skills">
            <li>Skills</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
        </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setMobileNavbar(!mobileNavbar)}
        >
          <ImCross />
        </button>
      </NavStyle>
    </>
  );
};
export default Navbar;
