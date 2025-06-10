import React, { useState, useRef, useEffect } from 'react'
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from "react-icons/tb";
import { RxPause } from "react-icons/rx";
import { IoPlaySharp } from "react-icons/io5";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";

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

  const rewind = (seconds) => {
    audioPlayer.current.currentTime += seconds;
    changePlayerCurrentTime();
  }

  const handleEnd = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  }

  return (
    <div className='audio-player'>
      <audio 
        ref={audioPlayer}
        src={audioFile}
        onEnded={() => handleEnd()}
      >
      </audio>
      <div className="progress-bar">
        <input 
          type="range" 
          className='audio-player--timeline' 
          ref={progressBar} 
          onChange={changeRange}
          defaultValue='0'
        />
        <div className="progress-bar--timestamps">
          <span>{calculateTime(currentTime)}</span>
          <span>{duration ? calculateTime(duration) : '00:00'}</span>
        </div>
      </div>
      <div className="progress-bar--controls">
        <button onClick={() => rewind(-10)}><TbRewindBackward10 /></button>
        <button onClick={() => togglePlayPause()} >{isPlaying ? <RxPause /> : <IoPlaySharp />}</button>
        <button onClick={() => rewind(10)}><TbRewindForward10 /></button>
      </div>
    </div>
  )
}

export default AudioPlayer
