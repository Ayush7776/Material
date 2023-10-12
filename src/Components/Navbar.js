import React from 'react'
import '@mui/material/.'
import { Typography, Button, AppBar, Toolbar } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
function Navbar() {
  return (
    <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' flexGrow={1}>Cake Makers</Typography>
          <Button variant='text' color='inherit' startIcon={<LoginIcon/>}>Login</Button>
          <Button variant='text' color='inherit' endIcon={<LogoutIcon></LogoutIcon>}>Logout</Button>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar