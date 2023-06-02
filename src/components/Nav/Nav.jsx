import React from 'react'
import { useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'

import "./nav.css"

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <nav>
       <a href="#" onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
       <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
       <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt/></a>
       <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><RiServiceLine/></a>
       <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine/></a>
    </nav>
    </>
  )
}

export default Nav