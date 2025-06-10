import React from 'react';
import { Link } from 'react-router-dom';
import './MeditationCard.css';
import { IoIosPlayCircle } from "react-icons/io";
import { isMobile } from 'react-device-detector'


const MeditationCard = ({props}) => {
  return (
    <div className='meditation-card'>
      <img src={`./courses/${props.img}`} alt="" />
      <div className="meditation-card--title">{props.title}</div>
      <div className="meditation-card--subtitle">{props.subtitle}</div>
      <div className="meditation-card--duration">{props.duration} minutos</div>
      <Link className='meditation-card--link' to={`/meditaciones/${props.id}`}>
        {!isMobile && 'Escuchar'}
        <IoIosPlayCircle />
      </Link>
    </div>
  )
}

export default MeditationCard
