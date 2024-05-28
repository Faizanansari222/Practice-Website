import React from 'react'
import { Button } from '@mui/material'
// import { Margin } from '@mui/icons-material'
function Btn(props) {
    const {sx,variant, className, text} = props
  return (
    <div>
      <Button sx={{sx}} className={className} variant={variant}>{text}</Button>
    </div>
  )
}

export default Btn
