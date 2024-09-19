import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer1 from '../images/Rectangle48.png'
import Logo from '../images/CP-Logo 1.png'

function Footer() {
  return (
    <>
      <Box sx={{
        backgroundImage: `url(${Footer1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '243px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        pl: 14,
        '@media (max-width: 600px)': {pl: 3}
        
      }}>
        <Typography>
            <img src={Logo} width='150px' height='72px' /> 
        </Typography>
        <Typography sx={{color: 'white', fontSize: '20px', fontWeight: 400}}>All Rights Reserved</Typography>
      </Box>
    </>
  )
}

export default Footer
