import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaPause } from "react-icons/fa";
import './AudioPlayer.css'

const AudioPlayer = ({audioFile}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState])

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = secs % 60;
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`);
    setCurrentTime(progressBar.current.value);
  }

  return (
    <div className='audio-player'>
      <audio 
        ref={audioPlayer}
        src={audioFile}
      >
      </audio>
      <button onClick={() => togglePlayPause()} >{isPlaying ? <FaPause /> : <FaPlay />}</button>
      <p>{calculateTime(currentTime)}</p>
      <input 
        type="range" 
        className='audio-player--timeline' 
        ref={progressBar} 
        onChange={changeRange}
        defaultValue='0'
      />
      <p>{duration ? calculateTime(duration) : '00:00'}</p>
    </div>
  )
}

export default AudioPlayer
