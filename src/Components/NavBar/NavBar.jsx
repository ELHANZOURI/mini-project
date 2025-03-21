import React, { useEffect, useState } from 'react'
import "./NavBar.css"
import logo from "../../assets/logo.png"
import menu_icon from "../../assets/menu-icon.png"
import logoPlatforme from "../../assets/logoPlatforme.png";
import lgpl from "../../assets/lgpl.png";
import { Link } from 'react-scroll'

const NavBar = () => {

  const [sticky, setSticky] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY>505?setSticky(true):setSticky(false)
    })
  }, [])
  
  const [mobileMenu, setMobileMenu] = useState(false)
  const [hide, setHide] = useState(false)
  
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }



  return (
    <nav
      className={`container ${sticky && "dark-nav"}
      }`}
    >
      <img src={lgpl} className="logo" alt="" />
      <ul className={mobileMenu ? "" : "hide-menu"}>
        <li>
          {" "}
          <Link
            onClick={() => toggleMenu()}
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
          >
            Accueil
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="program"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => toggleMenu()}
          >
            Programme
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={() => toggleMenu()}
          >
            Témoignages
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="campus"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => toggleMenu()}
          >
            Campus
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            to="test"
            smooth={true}
            offset={-260}
            duration={500}
            onClick={() => toggleMenu()}
          >
            Témoignages
          </Link>{" "}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-170}
            duration={500}
            onClick={() => toggleMenu()}
          >
            <button className="btn">Contactez-nous</button>
          </Link>{" "}
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default NavBar
