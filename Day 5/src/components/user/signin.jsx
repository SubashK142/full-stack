import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { InputLabel, Select, MenuItem } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();


const SignIn = () => {
    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
      };
    const [selectedRole, setSelectedRole] = useState('user');
    const navigate = useNavigate();

    const login = async (email, password) => {
        return true;
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
          role: selectedRole,
        });
        
        try {
            
            const isLoggedIn = login(email, password);
      
            if (isLoggedIn) {
             
              if (selectedRole === 'admin') {
                navigate('/admin');
              } else {
                navigate('/user');
              }
            } else {
             
              console.log('Login failed');
            }
          } catch (error) {
            
            console.error('Login error:', error);
          }
        };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm" >
        <CssBaseline />
        <Box 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' ,marginLeft:'10%'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{marginLeft:'10%'}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
          <InputLabel
        style={{ marginTop: '16px', fontSize: '1rem', color: 'rgba(0, 0, 0, 0.54)' }}
        id="role-select-label"
      >
        Select Role *
      </InputLabel>
        <Select style={{width:'400px'}}
         labelId="role-select-label"
          id="role-select"
          value={selectedRole}
          label="Select Role"
           onChange={handleRoleChange}
       >
      
        <MenuItem value="user">User</MenuItem>
        <MenuItem value="admin">Admin</MenuItem>
          </Select>
          
            <TextField style={{width:'400px'}}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField  style={{width:'400px'}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button style={{width:'400px'}}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item sx={{display:'flex',marginLeft:'25%'}}>
                <Link to='/reg' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}


export default SignIn