import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import mediLinks from '../data/medi-links'
import { useParams } from 'react-router-dom'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import './Meditation.css'
import AudioPlayer from '../components/AudioPlayer';

const Meditation = () => {
  const { id } = useParams();
  return (
    <div className='meditation card'>
      <Link className='meditation--goback' to={'/meditaciones'}>
        <IoChevronBackCircleOutline />
      </Link>
      <div className="meditation--player">
        <div className="meditation--header">
          <h4 className='meditation--supertitle'>Meditación</h4>
          <h2 className='meditation--title'>{mediLinks[id - 1].title}</h2>
        </div>
        <img className='card' src={`../courses/${mediLinks[id-1].img}`} alt="" />
        {/* <ReactAudioPlayer
          src={mediLinks[id - 1].url}
          controls
          controlsList='nodownload'
        /> */}
        <AudioPlayer 
          audioFile={mediLinks[id - 1].url}
        />
      </div>
    </div>
  )
}

export default Meditation
