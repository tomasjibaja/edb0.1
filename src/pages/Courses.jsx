import React from 'react'
import coursesImg from '../data/courses-img'
import Course from '../components/Course'
import './Courses.css'


const Courses = () => {
  return (
    <div className='courses card'>
      <h2>CURSOS</h2>
      <div className="courses-container">
        {coursesImg.map((elem, key) => {
          return <Course key={key} imgUrl={`courses/${elem}`} />
        })}
      </div>
    </div>
  )
}

export default Courses
