import { Box, Typography } from '@mui/material'
import useWindowResize from "../hooks/WindowResize";
import Grid from '@mui/material/Grid2';
import { baconSausageBreakfast, breakfastSandwich, breakfastWrap, cfcBreakfast, cheeseOmelette, denverSandwich, eggyBurger } from '../assets/menuItems/breakfasts';
import React, { Suspense } from 'react';

function Breakfast() {
  const { width } = useWindowResize();
  const LazyMenuGridItem = React.lazy(() => import('./MenuGridItem'))

  return (
    <Box paddingY={width > 730 ? 12 : 4} width="100%" bgcolor='#F1E1C9' marginBottom={12}>
      <Box display='flex' flexDirection='column'>
        <Typography variant={ width > 730 ? 'h2' : 'mobileh2' } sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} >Breakfast</Typography>
        <Typography variant={ width > 730 ? "body1" : "mobilebody1"} sx={{ textTransform: 'uppercase' }}>Available daily until 11:30 am</Typography>
      </Box>
      <Box padding={2} display='flex' justifyContent='center' textAlign='left'>
        <Grid container spacing={2}>
          <Grid container direction='column' size={{md: 12, lg: 4 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMenuGridItem item={baconSausageBreakfast} isBreakfast={true}/>
              <LazyMenuGridItem item={cfcBreakfast} isBreakfast={true}/>
            </Suspense>
          </Grid>
          <Grid container direction="column" size={{ md: 12, lg: 4 }}>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMenuGridItem item={denverSandwich} isBreakfast={true}/>
              <LazyMenuGridItem item={eggyBurger} isBreakfast={true}/>
            </Suspense>
          </Grid>
          <Grid container direction="column" size={{ md: 12, lg: 4 }} alignItems='stretch'>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyMenuGridItem item={cheeseOmelette} isBreakfast={true}/>
              <LazyMenuGridItem item={breakfastSandwich} isBreakfast={true}/>
              <LazyMenuGridItem item={breakfastWrap} isBreakfast={true}/>
            </Suspense>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Breakfast