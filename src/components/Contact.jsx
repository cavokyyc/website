import { Box, Typography } from "@mui/material"
import useWindowResize from "../hooks/WindowResize";
import Grid from '@mui/material/Grid2';
import parking from '../assets/parking.svg';
import { Element } from "react-scroll";

function Contact() {
  const { width } = useWindowResize();

  return (
    <Element name="contact">
      <Box display='flex' justifyContent='center'>
        <Grid container spacing={8} width='80%' justifyContent='center' paddingY={12}>
            <Grid item size={{ md:6, sm:12, xs:12 }} height='50vh'>
              <Box display='flex' width='100%' justifyContent='center'>
                <Box display="flex" flexDirection='column' alignItems='center'justifyContent='center' padding={4} width='450px'>
                  <Box bgcolor='#FFA238' width='350px' height='100px' display='flex' flexDirection='column' justifyContent='center' sx={{ borderRadius: '64px 64px 0 0' }} margin={0.5} padding={1}>
                    <Typography variant={width > 730 ? "h3" : "mobileh2" } sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Contact Us</Typography>
                  </Box>
                  <Box bgcolor='#DD4200' margin={0.5} borderRadius={2} paddingX={1} width='95%'>
                    <Typography variant={ width > 730 ? "body1" : "mobilebody1"} color='#F4EEE5' sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>CAV-OK GRILL</Typography>
                  </Box>
                  <Box bgcolor='#D05C04' width='90%' margin={0.5} borderRadius={2} paddingX={1} paddingY={2} display='flex' flexDirection='column'>
                    <Typography variant={ width > 730 ? "body1" : "mobilebody1"} color='#F4EEE5'>155 Maclaurin Dr, Calgary, AB T3Z 3S4</Typography>
                    <a href="tel:PHONE_NUM">
                      <Typography color='#C3F78F' sx={{ "&:hover": { color: "#8BAB00" }, textDecoration: 'underline' }}>
                        +1 (403) 286-8443
                      </Typography>
                    </a>
                  </Box>
                  <Box bgcolor='#8BAB00' margin={0.5} width="380px" padding={1}>
                  </Box>
                  <Box bgcolor='#FFA238' width='350px' display='flex' flexDirection='column' justifyContent='center' sx={{ borderRadius: '0 0 52px 52px' }} margin={0.5} padding={2}>
                    <Typography variant={ width > 730 ? "body1" : "mobileh3"}>Open Monday to Saturday</Typography>
                    <Typography variant={ width > 730 ? "body1" : "mobileh3"}>9am to 4pm</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item size={{ md: 6, sm:12, xs:12 }} height='50vh'>
              <Box display="flex" flexDirection='column' alignItems='center' justifyContent='center' padding={4} width='100%' height='100%'>        
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.383968268187!2d-114.3749618!3d51.101375499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716ad65db9c211%3A0x5caea69de5634188!2sCav-Ok%20Grill%20Ltd!5e0!3m2!1sen!2sca!4v1727147969360!5m2!1sen!2sca" width='100%' height='100%' style={{ border: 0 }} loading="lazy"></iframe>
              </Box>
            </Grid>
            <Grid item size={12}>
              <img src={parking} alt="parking" width='100%'/>
            </Grid>
        </Grid>
      </Box>
    </Element>
  )
}

export default Contact