import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
import './Manuals.css'

const url = 'https://drive.google.com/file/d/0Bz-LwECIzRKtZ1NPZHJNREVzSEhpcmtoelY4eU8xaXV3QUFV/preview?usp=sharing&resourcekey=0-9KCV9XW2yanMiCUpu_a3aA'

const Manuals = () => {
  return (
    <div>
      <h2>MANUALES</h2>
      <iframe
        className='test-player'
        frameBorder={0}
        src={url}>
      </iframe>
    </div>
  )
}

export default Manuals
