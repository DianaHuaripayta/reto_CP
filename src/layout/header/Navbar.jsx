import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Avatar, Button, Menu, MenuItem, Tooltip } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../../context/authContext'
const Navbar = () => {
    const { logOut,user} = useUserAuth();
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/login");
        } catch (error) {
            console.log(error.code);
        }
    };

    const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

  return (
      <>
        <div>
            {user ? (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{background:'#fafaff'}}>
                    <Toolbar variant="dense">
                        <IconButton edge="start"  aria-label="menu" sx={{ mr: 2 }} component={Link} to="/">
                            <Typography variant="h6" color="primary" component="div" sx={{fontWeight:'bolder'}}>
                                Cineplanet
                            </Typography>
                        </IconButton>

                        <Box sx={{ justifyContent:'right',padding:'0px 35px' , flex:'1', display: { xs: 'none', md: 'flex' } }}>
                            <Button
                            component={Link}
                            to="/"
                                color="primary"
                                sx={{ my: 2, display: 'block' }}
                            >
                                Home
                            </Button>
                            <Button
                                component={Link}
                                to="/dulceria"
                                
                                color="primary"
                                sx={{ my: 2, display: 'block' }}
                            >
                                Dulceria
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user && user.displayName} src={user && user.photoURL} />
                            </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleLogout}>
                                    <Typography textAlign="center">Cerrar Sesion</Typography>
                                </MenuItem>
                
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar> 
            </Box>
        </>
            ) : (
                <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{background:'#fafaff'}}>
                    <Toolbar variant="dense">
                        <IconButton edge="start"  aria-label="menu" sx={{ mr: 2 }} component={Link} to="/">
                            <Typography variant="h6" color="primary" component="div" sx={{fontWeight:'bolder'}}>
                                Cineplanet
                            </Typography>
                        </IconButton>

                    <Box sx={{ justifyContent:'right',padding:'0px 35px' , flex:'1', display: { xs: 'none', md: 'flex' } }}>
                        <Button
                        component={Link}
                        to="/"
                            color="primary"
                            sx={{ my: 2, display: 'block' }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/dulceria"
                            
                            color="primary"
                            sx={{ my: 2, display: 'block' }}
                        >
                            Dulceria
                        </Button>
                    </Box>
                    </Toolbar>
                </AppBar> 
            </Box>
            
            )}
        </div>
      </>
  )
}
export default Navbar