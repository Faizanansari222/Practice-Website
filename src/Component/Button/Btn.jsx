import React from 'react'
import { Button } from '@mui/material'
// import { Margin } from '@mui/icons-material'
function Btn(props) {
    const {onClick, sx,variant, className, text , addPro} = props
  return (
    <div>
      <Button onClick={onClick} sx={{sx}} className={className} variant={variant}>{text}</Button>
    </div>
  )
}

export default Btn
