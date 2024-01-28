import React, { useState } from "react";
import "../style/navbar.css";
import {NavLink} from 'react-router-dom';

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Dhara Global Solution
      </a>
      <ul className={active}>
        <li className="nav__item">
        <NavLink to="/" className="nav__link" >Home</NavLink> 
        </li>
        <li className="nav__item">
        <NavLink to="/about" className="nav__link" >About</NavLink> 
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/contact" className="nav__link" >Contact</NavLink> 
        </li>
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/services" className="nav__link" >Services</NavLink> 
        </li>
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/testimonials" className="nav__link" >Testimonials</NavLink> 
        </li>
        
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/verify" className="nav__link" >Verification</NavLink> 
        </li>
        
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/reg" className="nav__link" >IntershipReg</NavLink> 
        </li>
        </li>
        <li className="nav__item">
        <li className="nav__item">
        <NavLink to="/book" className="nav__link" >Book</NavLink> 
        </li>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;