import React from 'react';
import { Link } from 'react-router-dom';
import './MeditationCard.css';
import { IoIosPlayCircle } from "react-icons/io";



const MeditationCard = ({props}) => {
  return (
    <div className='meditation-card'>
      <img src={`./courses/${props.img}`} alt="" />
      <div className="meditation-card--title">{props.title}</div>
      <div className="meditation-card--subtitle">{props.subtitle}</div>
      <div className="meditation-card--plays">{props.plays} reproducciones</div>
      <Link className='meditation-card--link' to={`/meditaciones/${props.id}`}>
        Escuchar
        <IoIosPlayCircle />
      </Link>
    </div>
  )
}

export default MeditationCard
