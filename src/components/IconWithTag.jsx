import React from 'react'
import { Avatar } from '@mui/material';
import "./IconWIthTag.css"

function IconWithTag( {name, logoPath , originCountry}) {
  return (
    <div className='company__container'>
        <img alt="Company Logo" src={`https://image.tmdb.org/t/p/w500${logoPath}`} className="logo" />
    </div>
  )
}

export default IconWithTag