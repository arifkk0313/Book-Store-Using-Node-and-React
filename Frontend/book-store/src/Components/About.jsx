import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
        <Box  display='flex' flexDirection='column' alignItems='center'>
            <Typography sx={{fontFamily:'fantasy'}} variant='h2'>This is a CRUD APPLICATION</Typography>
            <Typography variant='h3'>By MEARN STACK</Typography >
        </Box>
    </div>
  )
}

export default About