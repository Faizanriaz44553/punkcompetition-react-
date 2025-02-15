import { CircularProgress } from '@mui/material'
import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader-div'>
      <CircularProgress disableShrink />
    </div>
  )
}

export default Loader
