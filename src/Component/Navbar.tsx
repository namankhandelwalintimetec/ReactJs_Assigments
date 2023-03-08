import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { NavStyle } from "./NavbarStyle";
import { LinkAddresh } from "./Constant";

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
          {LinkAddresh.map((item) => (
            <Link to={item.to}>
              <li>{item.item}</li>
            </Link>
          ))}
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
