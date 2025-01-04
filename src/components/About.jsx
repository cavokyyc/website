import { Box, Typography } from "@mui/material"
import useWindowResize from "../hooks/WindowResize";
import airplaneAnimation from '../assets/airplaneAnimation.gif'
import { Element } from "react-scroll";
import { Link } from 'react-scroll';

function About() {
  const { width } = useWindowResize();

  return (
    <Element name="about">
    {
      width > 730 ?
      <>
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center' textAlign='left' padding={6}>
          <Box width="40%" marginY={12} paddingLeft={4} display='flex' justifyContent='center'>
            <img src={airplaneAnimation} alt='logo' width='80%'/>
          </Box>
          <Box width= "60%" paddingX={6} paddingY={12}>
            <Box paddingY={2} width="100%" display='flex' flexDirection='column'>
              <Typography variant="h1" color='#DD4200'>Welcome to CAV-OK GRILL</Typography>
              <Typography variant="h3" color='#DD4200'>Located inside the Calgary Flying Club since 1999</Typography>
            </Box>
            <Box paddingY={2} width="80%">
              <Typography variant="body1"color='#DD4200'>We&apos;re dedicated to serving fresh dishes inspired by Asian cuisines, comfort style. Whether you&apos;re a long-time regular with the Calgary Flying Club or stopping by on your way to Banff, come in for a hearty and comforting meal accompanied by breathtaking views of the Rockies</Typography>
            </Box>
            <Box paddingY={2} width="80%" display='flex' flexDirection='row' alignItems='center'>
              <Link to={'contact'} smooth={true}>  
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 'bold', textTransform: 'uppercase', "&:hover": { color: "#922C00" }, textDecoration: 'underline', cursor: 'pointer' }}
                  color='#DD4200'
                  >
                  Contact us for catering and pre-order
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </>
      :
      <>
      <Box display='flex' flexDirection='column-reverse' alignItems='center' justifyContent='center' textAlign='left' padding={1}>
        <Box marginY={ width > 730 ? 12 : 1} paddingLeft={4} display='flex' justifyContent='center'>
          <img src={airplaneAnimation} alt='logo' width='80%'/>
        </Box>
        <Box paddingX={  width > 730 ? 6 : 1} paddingY={4}>
          <Box paddingY={2} width="100%" display='flex' flexDirection='column'>
            <Typography variant="mobileh1" color='#DD4200'>Welcome to CAV-OK GRILL</Typography>
            <Typography variant="mobileh3" color='#DD4200'>Located inside the Calgary Flying Club since 1999</Typography>
          </Box>
          <Box paddingY={2}>
            <Typography variant="mobilebody1" color='#DD4200'>We&apos;re dedicated to serving fresh dishes inspired by Asian cuisines, comfort style. Whether you&apos;re a long-time regular with the Calgary Flying Club or stopping by on your way to Banff, come in for a hearty and comforting meal accompanied by breathtaking views of the Rockies</Typography>
          </Box>
          <Box paddingY={2} display='flex' flexDirection='row' alignItems='center'>
            <Link to='contact' smooth={true}>  
              <Typography
                variant="mobilebody1"
                sx={{ fontWeight: 'bold', textTransform: 'uppercase', "&:hover": { color: "#922C00" }, textDecoration: 'underline', cursor: 'pointer' }}
                color='#DD4200'
                >
                Contact us for catering and pre-order
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      </>
    }
      
    </Element>
  )
}

export default About