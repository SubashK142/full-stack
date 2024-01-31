import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarAD = () => {
  return (
    <AppBar position="static"  sx={{backgroundColor:'#FFFFFF', boxShadow: 'none' }}>
      <Toolbar>
       
        <Typography variant="h6" component={Link} to="/admin" sx={{ flexGrow: 0, '&:hover': { textDecoration: 'none',color: 'Black' }, color: 'black' }}>
        <Button color="inherit" >
       Home
       </Button>
        </Typography>

        {/* Center Section */}
        
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', '&:hover': { textDecoration: 'none',color: 'Black' },color: 'Black' }}>
        <Button color="inherit" component={Link} to="/bookings">
        manage
      </Button>
        <Button color="inherit" component={Link} to="/bookings">
        Bookings
      </Button>
      <Button color="inherit" component={Link} to="/package">
        Packages
      </Button>
        </Typography>

        {/* Right Section */}
       
        <Typography variant="body1" sx={{ marginLeft: 'auto', textDecoration: 'none', color: 'Black' ,marginRight:'10px'}}>
        <Button color="inherit" >
        Admin |
      </Button>
      <Button color="inherit"  sx={{marginLeft:'0px'}} >
      subash
    </Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarAD;
