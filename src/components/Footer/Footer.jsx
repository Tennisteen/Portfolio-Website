import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>PRAKHAR</a>
      <ul className='links'>
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href='https://instagram.com' target='_blank'><AiOutlineInstagram/></a>
        <a href='https://twitter.com' target='_blank'><FiTwitter/></a>
      </div>
      <div className="copyright">
        <small> &copy; PRAKHAR WEBSITE. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer