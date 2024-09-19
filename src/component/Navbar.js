import React, { useState } from 'react'
import '../style/Navbar.css'
import { AppBar, Box, Button, ButtonGroup, Toolbar, Typography, IconButton, Stack, Drawer, Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Logo from '../images/CP-Logo 1.png'
import SearchBar from './SearchBar';
import { Menu } from '@mui/icons-material';


function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawer = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box onClick={handleDrawer} >
            <Typography sx={{my: 1}}>
                <img src={Logo} width={'150px'} height={'72px'} />
            </Typography>
            <Divider />
            <Box>
                <ul className='mobile-menu'>
                    <li>
                        <NavLink to='/community'>COMMUNITY</NavLink>
                    </li>
                    <li>
                        <NavLink to='/book'>BOOKS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/receipt'>RECEIPT INDEX</NavLink>
                    </li>
                    <li>
                        <NavLink to='popular'>POPULAR</NavLink>
                    </li>
                    <li>
                        <Button startIcon={<FiLogIn color='#509E2F' />} size='small' sx={{color: 'black'}} >REGISTER</Button>
                    </li>
                    <li>
                        <Button startIcon={<FaUser color='#509E2F' />} size='small' sx={{color: 'black'}} >LOGIN</Button>
                    </li>
                </ul>

            </Box>
        </Box>
    )

    return (
        <>
            <Box>
                <AppBar >
                    <Toolbar sx={{ bgcolor: 'black', display: 'flex', justifyContent: 'center', '@media (max-width: 600px)': {display: { xs: 'none', sm: 'block' }} }}>
                        <Box>
                            <ul className='navigation-menu'>
                                <li>
                                    <NavLink to='/community'>COMMUNITY</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/book'>BOOKS</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/receipt'>RECEIPT INDEX</NavLink>
                                </li>
                                <li>
                                    <NavLink to='popular'>POPULAR</NavLink>
                                </li>
                            </ul>

                        </Box>
                        <ButtonGroup sx={{ ml: 'auto' }}>
                            <Button startIcon={<FiLogIn color='#509E2F' />} size='small' className='btn'>REGISTER</Button>
                            <Button startIcon={<FaUser color='#509E2F' />} size='small' className='btn'>LOGIN</Button>
                        </ButtonGroup>
                    </Toolbar>
                    <Box sx={{ display: 'flex', bgcolor: 'white' }}>
                        <Typography sx={{ ml: 15, mt: 1, '@media (max-width: 600px)': { ml: 2, flexGrow: 1 } }}>
                            <img src={Logo} width={'150px'} height={'72px'} />
                        </Typography>
                        <Box sx={{
                            mt: 4,
                            ml: 7,
                            width: '500px',
                            height: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid black',
                            borderRadius: '20px',
                            '@media (max-width: 600px)': { display: { xs: 'none', sm: 'bloxk' } }
                        }}>
                            <label className='label'>All Categories</label>
                            <SearchBar />
                            <Stack sx={{
                                dislay: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexGrow: 1,
                                height: '32px',
                                color: 'black',
                                bgcolor: '#D9D9D9',
                                borderRadius: '20px',
                                fontWeight: 400,
                                fontSize: '20px',
                                ml: 3
                            }}>
                                <IoSearch />
                            </Stack>
                        </Box>
                        <IconButton
                            onClick={handleDrawer}
                            sx={{
                                color: 'black',
                                display: { xs: 'block', sm: 'none' }
                            }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                </AppBar>
                <Box>
                    <Drawer
                        open={mobileOpen}
                        onClose={handleDrawer}
                        sx={{display: {xs: 'block', sm: 'none'},textAlign: 'center' , "& .MuiDrawer-paper": {
                            boxSizing: 'border-box',
                            width: '240px'
                          },
                          }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Toolbar />
            </Box>
        </>
    );
}

export default Navbar;
