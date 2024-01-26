import { Link } from "react-router-dom";
// import Hamburger from "./Hamburger";
import "./Navbar.css";
import { useState, useEffect, useCallback, useMemo } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IconContext } from "react-icons";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [button, setButton] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  // const toggleHamburger = () => {
  //   setHamburgerOpen(!hamburgerOpen);
  // };

  const closeMobileMenu = () => setHamburgerOpen(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setHamburgerOpen(false);

    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  const iconColor = useMemo(() => {
    if (hoverState) return '#ef4444';
    else return 'white';
  }, [hoverState]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevState => !prevState);
  }, [setDarkMode]);

  return (
    <>
      <nav>
        <div className="navbar bg-dark-blue flex md:justify-between px-7">
          <button onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)} onClick={toggleDarkMode}>
            <IconContext.Provider value={{ size: "3em", className: "transition duration-500", color: iconColor }}>
              { !darkMode && <MdOutlineDarkMode /> }
              { darkMode && <MdOutlineLightMode /> }
            </IconContext.Provider>
          </button>
          <div className="pb-3 text-white w-full md:w-auto">
            <ul className="flex justify-center items-center md:text-xl">
              <li className="mr-10 mt-5">
                <Link
                  to="/"
                  className="hover:text-red-500 transition duration-500"
                  // onClick={toggleHamburger}
                >
                  Home
                </Link>
              </li>
              <li className="mr-10 mt-5">
                <Link
                  to="/about"
                  className="hover:text-red-500 transition duration-500"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="mr-10 mt-5">
                <Link
                  to="/community"
                  className="hover:text-red-500 transition duration-500"
                  onClick={closeMobileMenu}
                >
                  Community
                </Link>
              </li>
              <li className="mr-10 mt-5">
                <Link
                  to="/discord"
                  className="hover:text-red-500 transition duration-500"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="Hamburger" onClick={toggleHamburger}>

            <Hamburger />
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
