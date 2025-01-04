import { Box, Typography, Paper } from '@mui/material'
import useWindowResize from "../hooks/WindowResize";
import Grid from '@mui/material/Grid2';
import MenuGridItem from './MenuGridItem';
import { chickenBurger, dailySpecial, deluxeChickenBurger, doubleSpringbankBurger, koreanBBQBurger, porkKatsu, pulledPork, spicyChickenWrap, springbankBurger } from '../assets/menuItems/mains';
import { clubhouse, chickenSalad, classicBLT, eggSalad, grilledCheese, grilledCheeseWithBacon, hamAndCheese, tunaSalad, turkey } from '../assets/menuItems/sandwiches';
import { cobbSalad, greenSalad } from '../assets/menuItems/salads';
import { chickenFingers, fries, gravy, kFries } from '../assets/menuItems/sides';
import airplaneLogo from '../assets/Airplane_Brown.svg';

function Lunch() {
  const { width } = useWindowResize();

  return (
    <Box paddingY={width > 730 ? 12 : 4} bgcolor='#F5D9A2'>

    {
      width > 730 ?
      <>
        <Box display='flex' flexDirection='column'>
          <Typography variant="h2" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Lunch</Typography>
          <Typography variant="body1" sx={{ textTransform: 'uppercase' }}  paddingBottom={4}>Available from 11:30 am to close</Typography>
        </Box>
        <Typography paddingTop={8} paddingBottom={4} variant="h4" sx={{ textTransform: 'uppercase' }}>
          mains
        </Typography>
      </>
      :
      <>
        <Box display='flex' flexDirection='column'>
          <Typography variant='mobileh2' sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Lunch</Typography>
          <Typography variant="mobilebody1" sx={{ textTransform: 'uppercase' }}  paddingBottom={4}>Available from 11:30 am to close</Typography>
        </Box>
        <Typography paddingTop={8} paddingBottom={4} variant="mobileh4" sx={{ textTransform: 'uppercase' }}>
          mains
        </Typography>
      </>
    }
      <Box padding={2} marginBottom={8} display='flex' justifyContent='center' textAlign='left'>
        <Grid container spacing={2}>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={dailySpecial} isBreakfast={false}/>
            <MenuGridItem item={koreanBBQBurger} isBreakfast={false}/>
            <MenuGridItem item={porkKatsu} isBreakfast={false}/>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={springbankBurger} isBreakfast={false}/>
            <MenuGridItem item={doubleSpringbankBurger} isBreakfast={false}/>
            <MenuGridItem item={pulledPork} isBreakfast={false}/>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={spicyChickenWrap} isBreakfast={false}/>
            <MenuGridItem item={chickenBurger} isBreakfast={false}/>
            <MenuGridItem item={deluxeChickenBurger} isBreakfast={false}/>
          </Grid>
        </Grid>
      </Box>

      {
        width > 730 ?
        <>
          <Typography paddingTop={8} paddingBottom={4} variant="h4" sx={{ textTransform: 'uppercase' }}>
            Sandwiches
          </Typography>
        </>
        :
        <>
          <Typography paddingTop={8} paddingBottom={4} variant="mobileh4" sx={{ textTransform: 'uppercase' }}>
            Sandwiches
          </Typography>
        </>
      }

      <Box padding={2} marginBottom={8} display='flex' justifyContent='center' textAlign='left'>
        <Grid container spacing={2}>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={clubhouse} isBreakfast={false}/>
            <MenuGridItem item={classicBLT} isBreakfast={false}/>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={chickenSalad} isBreakfast={false}/>
            { width > 1200 && 
            <Grid item flex={1} display='flex' flexDirection='column'>
              <Paper 
                sx={{
                  bgcolor: 'transparent',
                  marginY:4,
                  height:'100%',
                  alignContent: 'center',
                  alignItems: 'center',
                  boxShadow: 0,
                }}
                >
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
                  <img src={airplaneLogo} alt='logo'/>
                </Box>
              </Paper>
            </Grid>
            }
            <MenuGridItem item={turkey} isBreakfast={false}/>
            <MenuGridItem item={hamAndCheese} isBreakfast={false}/>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={eggSalad} isBreakfast={false}/>
            <MenuGridItem item={tunaSalad} isBreakfast={false}/>
            <MenuGridItem item={grilledCheese} isBreakfast={false}/>
            <MenuGridItem item={grilledCheeseWithBacon} isBreakfast={false}/>
          </Grid>
        </Grid>
      </Box>

      {
        width > 730 ?
        <>
          <Typography paddingTop={8} paddingBottom={4} variant="h4" sx={{ textTransform: 'uppercase' }}>
            Salads & Sides
          </Typography>
        </>
        :
        <>
          <Typography paddingTop={8} paddingBottom={4} variant="mobileh4" sx={{ textTransform: 'uppercase' }}>
            Salads & Sides
          </Typography>
        </>
      }
      
      <Box padding={2} display='flex' justifyContent='center' textAlign='left'>
        <Grid container spacing={2}>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={cobbSalad} isBreakfast={false}/>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={greenSalad} isBreakfast={false}/>
            <MenuGridItem item={chickenFingers} isBreakfast={false}/>
            <MenuGridItem item={fries} isBreakfast={false}/>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <MenuGridItem item={kFries} isBreakfast={false}/>
            { width > 1200 && 
            <Grid item flex={1} display='flex' flexDirection='column'>
              <Paper 
                sx={{
                  bgcolor: 'transparent',
                  marginY:4,
                  height:'100%',
                  alignContent: 'center',
                  alignItems: 'center',
                  boxShadow: 0,
                }}
                >
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
                  <img src={airplaneLogo} alt='logo'/>
                </Box>
              </Paper>
            </Grid>
            }
            <MenuGridItem item={gravy} isBreakfast={false}/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Lunch