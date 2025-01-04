import { Box } from '@mui/material';
import plate from '../assets/SpringbankBurger.jpg';
import logo from '../assets/cavok_logo_white.svg';
import useWindowResize from "../hooks/WindowResize";
import { Element } from 'react-scroll';

function Home() {
  const { width } = useWindowResize();

  return (
    <Element name="home">
      {width > 730 ? 
        <Box height='80vh' width="100%" display='flex' alignItems='center' justifyContent='center'>
          <img
            src={plate}
            alt='plate'
            style={{ 
              position:'absolute',
              left: 0,
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              objectPosition: '50% 38%'
            }}/>
          <Box position='absolute'>
            <img src={logo} alt='logo'/>
          </Box>
        </Box>
        :
        <Box width="100%" display='flex' alignItems='center' justifyContent='center'>
          <img src={plate} alt='plate' width='100%' height='100%' style={{ objectFit: 'cover' }}/>
          <Box position='absolute'>
            <img src={logo} alt='logo' style={{ width:'80%' }}/>
          </Box>
        </Box>
      }
    </Element>
  )
}

export default Home