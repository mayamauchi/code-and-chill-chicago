import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import "./Hamburger.css";
import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeMobileMenu = () => setHamburgerOpen(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 768) {
  //     setHamburgerOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", showButton);

  //   return () => {
  //     window.removeEventListener("resize", showButton);
  //   };
  // }, []);

  return (
    <>
      <nav>
        <div className="navbar bg-dark-blue text-white pb-3  max-w-4xl m-auto">
              <div onClick={toggleHamburger} className="md:hidden cursor-pointer">
            <Hamburger />
          </div>
            <div>   
              <ul className={hamburgerOpen ? "flex justify-end md:justify-center md:text-xl max-w-4xl mx-auto px-7 items-end" : 'justify-center md:justify-end md:text-xl max-w-4xl mx-auto px-7 hidden md:inline-flex items-end'}>
                <li className="mr-10 mt-5">
                  <Link
                    to="/#home"
                    className="hover:text-red-500 transition duration-500"
                    onClick={() => this.props.scrollToSection("home")}
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-10 mt-5">
                  <Link
                    to="/#about"
                    className="hover:text-red-500 transition duration-500"
                    onClick={() => this.props.scrollToSection("about")}
                  >
                    About
                  </Link>
                </li>
                <li className="mr-10 mt-5">
                  <Link
                    to="/#community"
                    className="hover:text-red-500 transition duration-500"
                    onClick={() => this.props.scrollToSection("community")}
                  >
                    Community
                  </Link>
                </li>
                <li className="mr-10 mt-5">
                  <Link
                    to="/#contact"
                    className="hover:text-red-500 transition duration-500"
                    onClick={() => this.props.scrollToSection("contact")}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
       
        </div>
      </nav>
    </>
  );
}

export default Navbar;
