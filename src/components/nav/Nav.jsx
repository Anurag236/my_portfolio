// import React from 'react'
// import './nav.css'
// import { AiOutlineHome } from 'react-icons/ai'
// import { AiOutlineUser } from 'react-icons/ai'
// import { BiBook } from 'react-icons/bi'
// import { RiServiceLine } from 'react-icons/ri'
// import { BiMessageSquareDetail } from 'react-icons/bi'
// import { FaUserGraduate } from "react-icons/fa6";
// import { useState } from 'react'

// const Nav = () => {
//     const [activeNav, setActiveNav] = useState('#')
//   return (
//     <nav>
//       <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
//       <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
//       <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
//       <a href='#education' onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaUserGraduate/></a>
//       <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
//       <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
//     </nav>
//   )
// }

// export default Nav

import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { FaUserGraduate } from 'react-icons/fa';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <nav>
      <a href="#" onClick={() => handleNavClick('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#education" onClick={() => handleNavClick('#education')} className={activeNav === '#education' ? 'active' : ''}>
        <FaUserGraduate />
      </a>
      <a href="#services" onClick={() => handleNavClick('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
