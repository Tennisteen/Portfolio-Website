import React from 'react'
import Resume from './Resume'
import Social from './Social'

import me from "../../asset/me.jpg"

import "./header.css"

const Header = () => {
  return (
    <header>
       <div className="container header_container">
         <h5>Hello I'm</h5>
         <h1>Prakhar Singh Chouhan</h1>
         <h5 className="text_light">I am a Fullstack developer</h5>
         <Resume />
         <Social />
         <div className="me">
          <img src={me} alt='my image'/>
         </div>  
       <a href='#contact' className='scroll_down' >Sroll Down</a>

       </div>
    </header>
  )
}

export default Header