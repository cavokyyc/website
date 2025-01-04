import { Box, Typography } from '@mui/material'
import useWindowResize from "../hooks/WindowResize";
import Grid from '@mui/material/Grid2';
import MenuGridItem from './MenuGridItem';
import { baconSausageBreakfast, breakfastSandwich, breakfastWrap, cfcBreakfast, cheeseOmelette, denverSandwich, eggyBurger } from '../assets/menuItems/breakfasts';

function Breakfast() {
  const { width } = useWindowResize();

  return (
    <Box paddingY={width > 730 ? 12 : 4} width="100%" bgcolor='#F1E1C9' marginBottom={12}>
      <Box display='flex' flexDirection='column'>
        <Typography variant={ width > 730 ? 'h2' : 'mobileh2' } sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >Breakfast</Typography>
        <Typography variant={ width > 730 ? "body1" : "mobilebody1"} sx={{ textTransform: 'uppercase' }}>Available daily until 11:30 am</Typography>
      </Box>
      <Box padding={2} display='flex' justifyContent='center' textAlign='left'>
        <Grid container spacing={2}>
          <Grid container direction='column' size={{md: 12, lg: 4 }}>
            <MenuGridItem item={baconSausageBreakfast} isBreakfast={true}/>
            <MenuGridItem item={cfcBreakfast} isBreakfast={true}/>
          </Grid>
          <Grid container direction="column" size={{ md: 12, lg: 4 }}>
            <MenuGridItem item={denverSandwich} isBreakfast={true}/>
            <MenuGridItem item={eggyBurger} isBreakfast={true}/>
          </Grid>
          <Grid container direction="column" size={{ md: 12, lg: 4 }} alignItems='stretch'>
            <MenuGridItem item={cheeseOmelette} isBreakfast={true}/>
            <MenuGridItem item={breakfastSandwich} isBreakfast={true}/>
            <MenuGridItem item={breakfastWrap} isBreakfast={true}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Breakfast