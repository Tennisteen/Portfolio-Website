import React from 'react'
import IMG1 from '../../asset/IMG1.png'
import IMG2 from '../../asset/IMG2.jpeg'
import IMG3 from '../../asset/IMG3.jpeg'

import "./portfolio.css"

const Portfolio = () => {
  const data = [
    {
       id:"1",
       image : IMG1,
       title: "Stack Over-Flow Clone",
       github : "https://github.com/Tennisteen/Stack-Overflow-Clone",
       demo : "https://stack-overflow-by-prakhar.netlify.app/"
    },
    {
      id:"2",
      image : IMG2,
      title: "Weather-App",
      github : "https://github.com/Tennisteen/WebAPP",
      demo : "https://tennisteen.github.io/WebAPP/"
   },
   {
    id:"3",
    image : IMG3,
    title: "Portfolio Website",
    github : "https://github.com/Tennisteen/Portfolio-Website",
    demo : "#"
  }
]
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container por_container">
         {
          data.map(({id, image, title, github , demo}) =>{
            return (
              <artice key={id} className="por_item">
              <div className="por_image">
                <img src={image} alt="title"/>
                </div>
                <h3>{title}</h3>
              <div className="por_cta">
              <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
           </artice>
            )
          })
         }
      </div>
    </section>
  )
}

export default Portfolio