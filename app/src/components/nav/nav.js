import React, {useState, useContext, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import ModalLogin from '../modals/modalLogin';
import Message from '../../context/message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ModalNotification from '../modals/modalNotification';

const Nav = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const pages = ['home','chat','search','profile']; // Used for the mapping of pages, you can also see that the Map will have a tenary for checking if its the / home
  const ctxLogin = useContext(Message);

  // Open and close are for mobile view
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  function onClose() {
    setOpen(!open);
  }

  function onCloseNotification() {
    setOpenNotification(!openNotification);
  }

  // Used for the logout
  const handleLogout = (event) => {
    ctxLogin.userHandler({logged:false})
    // Need to add a load state here
  };

  // Can't join those functions, that's why we still got the onClose up there
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function renderLogin() {
    return (
      <MenuItem  key={'r-9'} onClick={ () => {handleCloseNavMenu(); onClose() } } sx={{color:'#fff', backgroundColor:"#333", p:2, "&.active": {color: "#1976d2"}}}>
        <Typography sx={{textTransform:'uppercase',textAlign:'center'}}>Login</Typography>
      </MenuItem>
    )
  }

  function renderLogout() {
    return (
      <MenuItem  key={'r-9'} onClick={ () => {handleCloseNavMenu(); handleLogout() } } sx={{color:'#fff', backgroundColor:"#333", p:2, "&.active": {color: "#1976d2"}}}>
        <Typography sx={{textTransform:'uppercase',textAlign:'center'}}>Logout</Typography>
      </MenuItem>
    )
  }

  function renderLoginButton() {
    return (
      <Box key={'0-end'}>
        <Button
          onClick={ () => {handleCloseNavMenu(); onClose() } }
          sx={{ my: 2, mx:3, color:'#fff', display: 'block', "&.active": {color: "#1976d2"}}}
        >
          Login
        </Button>
      </Box>
    )
  }

  function renderLogoutButton() {
    return (
      <Box key={'0-end'}>
        <Button
          onClick={ () => {handleCloseNavMenu(); handleLogout(); } }
          sx={{ my: 2, mx:3, color:'#fff', display: 'block', "&.active": {color: "#1976d2"}}}
        >
          Logout
        </Button>
      </Box>
    )
  }
  
  return (
    <React.Fragment>
      <ModalLogin open={open} onClose={onClose}/>
      <AppBar position="static" sx={{backgroundColor:"#222"}}>
        <Container maxWidth={'100%'}>
          <Toolbar disableGutters>
            {/* This first area is the mobile screen side menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{color:'#1976d2'}}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  '& .MuiMenu-list': {backgroundColor: "#333"},
                  '& .MuiMenu-paper': {backgroundColor: "#333"},
                  display: { xs: 'block', md: 'none'}
                }}
              >
                {pages.map((page,index) => (
                  <MenuItem component={NavLink} to={page === 'home' ? '/' : `/${page}`} key={index} onClick={handleCloseNavMenu} sx={{color:'#fff', backgroundColor:"#333", p:2, "&.active": {color: "#1976d2"}}}>
                    <Typography sx={{textTransform:'uppercase',textAlign:'center'}}>{page}</Typography>
                  </MenuItem>
                ))}
                {ctxLogin.userProvider.logged ? null : renderLogin()}
                {!ctxLogin.userProvider.logged ? null : renderLogout()}
              </Menu>
            </Box>
            {/* Could also map this later just like above for the pages */}
            {/* This is the desktop view */}
            <Box sx={{flexGrow: 1, justifyContent:'center', display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page,index) => (
                <Box key={index}>
                  <Button
                    component={NavLink}
                    to={page === 'home' ? '/' : `/${page}`} // Careful here, the logic is simple: If its the home return to it else create the path
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx:3, color:'#fff', display: 'block', "&.active": {color: "#1976d2"}}}
                  >
                    {page}
                  </Button>
                </Box>
              ))}
              {/* This one is out of the group because it's not actually a route */}
              {ctxLogin.userProvider.logged ? null : renderLoginButton()}
              {!ctxLogin.userProvider.logged ? null : renderLogoutButton()}
            </Box>
            <IconButton onClick={onCloseNotification} sx={{display:'flex', justifyContent:'center', alignItems:'center', color:'#1976d2'}}>
              <ModalNotification openNotification={openNotification} onCloseNotification={onCloseNotification}></ModalNotification>
              <NotificationsNoneIcon m={0}></NotificationsNoneIcon>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};
export default Nav;