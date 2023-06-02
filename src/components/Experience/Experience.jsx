import React from 'react'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import "./experience.css"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className="contianer exp_container">
        <div className="exp_frontend">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            <article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article><article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>JAVASCRIPT</h4>
              </div>
            </article><article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>BOOTSTRAP</h4>
              </div>
            </article><article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>REACT</h4>
              </div>
            </article>
          </div>
        </div>


        <div className="exp_backend">
          <h3>Backend Development</h3>
          <div className="exp_content">
            <article className="exp_detail">
              <BsFillCheckCircleFill className='icon' />
              <div>
              <h4>NODE.JS</h4>
              </div>
            </article>
            <article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>EXPRESS.JS</h4>
              </div>
            </article><article className="exp_detail">
              <BsFillCheckCircleFill className='icon' />
              <div>
              <h4>MONGODB</h4>
              </div>
            </article>
            <article className="exp_detail">
              <BsFillCheckCircleFill className='icon'/>
              <div>
              <h4>SQL</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience