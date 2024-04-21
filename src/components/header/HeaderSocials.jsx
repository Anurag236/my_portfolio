import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/anurag-kumar-a64242223/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Anurag236" target='_blank'><FaGithub/></a>
      <a href="https://leetcode.com/anurag_parjapat/" target='_blank'><SiLeetcode/></a>
    </div>
  );
};

export default HeaderSocials;
