import React from 'react'
import './Course.css'

const Course = ({imgUrl}) => {
  return (
    <div className='course'>
      <img src={imgUrl} alt="course-img" />
      <h3>Course title</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quibusdam amet odit architecto nihil est ipsam.</p>
    </div>
  )
}

export default Course
