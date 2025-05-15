import React from 'react'
import './MoonPhases.css'
import { 
  GiAries, 
  GiTaurus, 
  GiGemini, 
  GiCancer, 
  GiLeo, 
  GiVirgo, 
  GiLibra, 
  GiScorpio, 
  GiSagittarius, 
  GiCapricorn, 
  GiAquarius, 
  GiPisces 
} from "react-icons/gi";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";



const MoonPhases = () => {
  return (
    <div className='moon-phases card'>
      <div className="phase">
        <WiMoonAltWaxingCrescent5 />
        <span>cuarto</span>
        <span>creciente</span>
      </div>
      <div className="astro-data">
        <p>El sol está en: <b>Escorpio</b> <GiScorpio /></p>
        <p>La luna está en: <b>Piscis</b> <GiPisces /></p>
        <p>Momento para <b>sembrar</b>.</p>
      </div>
    </div>
  )
}

export default MoonPhases
