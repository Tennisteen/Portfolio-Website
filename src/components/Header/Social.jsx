import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
const Social = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/prakhar-chouhan/' target='_blank'><GrLinkedin/></a>
        <a href='https://github.com/Tennisteen' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default Social