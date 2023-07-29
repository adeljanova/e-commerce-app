import { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RxSketchLogo } from "react-icons/rx";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const clickHandler = () => setClick(!click);
  const closeMobileMenuHandler = () => setClick(false);

  return (
    <>
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="">
          <Link to="/mobile-phones" className="navbar-logo" onClick={closeMobileMenuHandler}>
            <RxSketchLogo className="navbar-icon" />
            DARALEXA
          </Link>
          <div className="menu-icon" onClick={clickHandler}>
            {click ? <AiOutlineCloseCircle /> : <IoIosArrowDropdown />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/mobile-phones"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenuHandler}
              >
                MobilePhones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/smart-watches"
                className={({ isActive }) =>
                  "nav-links" + (isActive ? " activated" : "")
                }
                onClick={closeMobileMenuHandler}
              >
                SmartWatches
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
