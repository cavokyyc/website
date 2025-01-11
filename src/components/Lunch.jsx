import { Box, Typography, Paper } from '@mui/material'
import useWindowResize from "../hooks/WindowResize";
import Grid from '@mui/material/Grid2';
import { chickenBurger, dailySpecial, deluxeChickenBurger, doubleSpringbankBurger, koreanBBQBurger, porkKatsu, pulledPork, spicyChickenWrap, springbankBurger } from '../assets/menuItems/mains';
import { clubhouse, chickenSalad, classicBLT, eggSalad, grilledCheese, grilledCheeseWithBacon, hamAndCheese, tunaSalad, turkey } from '../assets/menuItems/sandwiches';
import { cobbSalad, greenSalad } from '../assets/menuItems/salads';
import { chickenFingers, fries, gravy, kFries } from '../assets/menuItems/sides';
import airplaneLogo from '../assets/Airplane_Brown.svg';
import React, { Suspense } from 'react';

function Lunch() {
  const { width } = useWindowResize();
  const LazyMenuGridItem = React.lazy(() => import('./MenuGridItem'))

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
            <Suspense>
              <LazyMenuGridItem item={dailySpecial} isBreakfast={false}/>
              <LazyMenuGridItem item={koreanBBQBurger} isBreakfast={false}/>
              <LazyMenuGridItem item={porkKatsu} isBreakfast={false}/>
            </Suspense>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <Suspense>
              <LazyMenuGridItem item={springbankBurger} isBreakfast={false}/>
              <LazyMenuGridItem item={doubleSpringbankBurger} isBreakfast={false}/>
              <LazyMenuGridItem item={pulledPork} isBreakfast={false}/>
            </Suspense>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <Suspense>
              <LazyMenuGridItem item={spicyChickenWrap} isBreakfast={false}/>
              <LazyMenuGridItem item={chickenBurger} isBreakfast={false}/>
              <LazyMenuGridItem item={deluxeChickenBurger} isBreakfast={false}/>
            </Suspense>
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
            <Suspense>
              <LazyMenuGridItem item={clubhouse} isBreakfast={false}/>
              <LazyMenuGridItem item={classicBLT} isBreakfast={false}/>
            </Suspense>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <Suspense>
              <LazyMenuGridItem item={chickenSalad} isBreakfast={false}/>
            </Suspense>
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
            <Suspense>
              <LazyMenuGridItem item={turkey} isBreakfast={false}/>
              <LazyMenuGridItem item={hamAndCheese} isBreakfast={false}/>
            </Suspense>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <Suspense>
              <LazyMenuGridItem item={eggSalad} isBreakfast={false}/>
              <LazyMenuGridItem item={tunaSalad} isBreakfast={false}/>
              <LazyMenuGridItem item={grilledCheese} isBreakfast={false}/>
              <LazyMenuGridItem item={grilledCheeseWithBacon} isBreakfast={false}/>
            </Suspense>
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
            <Suspense>
              <LazyMenuGridItem item={cobbSalad} isBreakfast={false}/>
            </Suspense>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <Suspense>
              <LazyMenuGridItem item={greenSalad} isBreakfast={false}/>
              <LazyMenuGridItem item={chickenFingers} isBreakfast={false}/>
              <LazyMenuGridItem item={fries} isBreakfast={false}/>
            </Suspense>
          </Grid>
          <Grid container direction='column' size={{ md: 12, lg: 4}}>
            <Suspense>  
              <LazyMenuGridItem item={kFries} isBreakfast={false}/>
            </Suspense>
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
            <Suspense>
              <LazyMenuGridItem item={gravy} isBreakfast={false}/>
            </Suspense>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Lunch