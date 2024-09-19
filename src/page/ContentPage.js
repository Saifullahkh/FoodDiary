import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import '../style/Home.css'
import Banner1 from '../images/cropped.png'
import { NavLink } from 'react-router-dom'
import Home from './Home'

function ContentPage() {
  return (
    <div>
      <Box sx={{
        backgroundImage: `url(${Banner1})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        
        height: '435px',
        display: 'flex',
        alignItems: 'center',
        pl: 3
        }}>
            <Typography sx={{fontSize: '60px', fontWeight: 500, color: 'white', '@media (max-width: 600px)': {fontSize: '30px'}}}>Food Diary</Typography>
      </Box>
      <Box>
        <Stack sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <ul className='menu'> 
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>Explore</li>
                <li>Help</li>
                <li>Profile</li>
            </ul>
        </Stack>
        <Home />
        </Box>
    </div>
  )
}

export default ContentPage
