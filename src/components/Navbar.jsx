import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import logo from '../assets/cavok_logo.svg'
import useWindowResize from "../hooks/WindowResize";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link } from 'react-scroll';

const NavbarLink = (props) => {
  return(
      <Link to={props.to} onClick={props.close} smooth={true}>
        <MenuItem>
          <Typography variant='h5' sx={{ textTransform: 'uppercase' }}>
              {props.name}
          </Typography>
        </MenuItem>
      </Link>
  )
}

function Navbar() {
  const [anchor, setAnchor] = useState();
  const open = Boolean(anchor);
  const { width } = useWindowResize();

  const handleOpen = () => {
    setAnchor(event.currentTarget);
  }

  const handleClose = () => {
    console.log("closed");
    setAnchor(null);
  }

  const navbarItems = [
  {
    to: 'home',
    name: 'home',
  }, {
    to: 'about',
    name: 'about',
  }, {
    to: 'menu',
    name: 'menu',
  }, {
    to: 'contact',
    name: 'contact',
  }
]

  return (
    <Box sx={{ position: 'sticky', top: 0, backgroundColor: '#F4EEE5'}} zIndex={1} width='100%' display='flex' justifyContent='center'>
      <Box width='90%' justifyContent='space-between' display='flex' flexDirection='row' alignItems='center' paddingY={2}>
        <Box height='100%' marginX={4}>
          <img src={logo} style={{ height: "6vh" }}/>
        </Box>
        {width > 730 ?
          <Box display='flex' justifyContent='space-between' height='100%' alignItems='center' marginX={4}>
              {navbarItems.map((item, key) => {return (
                <NavbarLink key={key} to={item.to} name={item.name}/>
              )})}
          </Box>
          :
          <Box marginX={4}>
            <IconButton onClick={() => handleOpen()}>
              <MenuIcon color="white"/>
            </IconButton>
            <Menu
              onClose={handleClose}
              open={open}
              anchorEl={anchor}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}>
              {navbarItems.map((item, key) => {return (
                <NavbarLink key={key} to={item.to} name={item.name} close={handleClose}/>
              )})}
            </Menu>
          </Box>
          }

      </Box>
    </Box>
  )
}

export default Navbar