import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import mediLinks from '../data/medi-links'
import { useParams } from 'react-router-dom'

const Meditation = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>{mediLinks[id - 1].title}</h2>
      <ReactAudioPlayer
        src={mediLinks[id - 1].url}
        controls
        controlsList='nodownload'
      />
    </div>
  )
}

export default Meditation
