import React from 'react';
import {  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Profile from './ProfileR';
import UserProfileCard from './Profile';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfileClick = () => {
    setShowProfileCard(true);
  };
  return (
    <AppBar position="static"  sx={{backgroundColor:'#FFFFFF', boxShadow: 'none' }}>
      <Toolbar>
       
        <Typography variant="h6"  sx={{ flexGrow: 0, '&:hover': { textDecoration: 'none',color: 'Black' }, color: 'black' }}>
        <Button color="inherit" component={Link} to="/user">
       Home
       </Button>
        </Typography>

        {/* Center Section */}
        <Typography style={{marginLeft:'5%'}} variant="h6" sx={{ flexGrow: 1, textAlign: 'center', '&:hover': { textDecoration: 'none',color: 'Black' },color: 'Black' }}>
        <Button color="inherit" component={Link} to="/package">
        Packages
        </Button>
        <Button color="inherit" component={Link} to="/boat">
        BoatHouse
      </Button>
        <Button color="inherit" component={Link} to="/bookings">
        Bookings
      </Button>
        </Typography>

        {/* Right Section */}
       
        <div className="navbar-right">
  <div>
    <Button
      color="inherit"
      aria-controls="profile-menu"
      aria-haspopup="true"
      onClick={handleClick}
      className="navbar-button"
    >
      <Avatar sx={{ width: 32, height: 32, marginRight: '5px' }}>
        U
      </Avatar>
      User
    </Button>
    <Menu
      id="profile-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <Link to="/profile" className="navbar-button">
          User Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={() => setShowProfileCard(!showProfileCard)}>
        {/* Toggle the state to show/hide the profile card */}
        <div>
          {showProfileCard && <UserProfileCard />}
        </div>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/" className="navbar-button">
          Logout
        </Link>
      </MenuItem>
    </Menu>
  </div>
</div>

      
    </Toolbar>
  </AppBar>
  );
}

export default Navbar;
