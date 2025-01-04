import { Typography, Card, Box } from '@mui/material'
import Grid from '@mui/material/Grid2';

function MenuGridItem(props) {
  return (
    <Grid item flex={1} display='flex' flexDirection='column'>
      <Card 
        sx={{
          bgcolor: props.isBreakfast ? '#F5D9A2' : '#F1E1C9',
          padding:4,
          margin:1,
          borderRadius:4,
          height:'100%',
          alignContent: 'center',
          alignItems: 'center',
        }}
        >        
        <Box display='flex' flexDirection='column' justifyContent='space-evenly' height='100%'>
          { props.item.img &&
            <img src={props.item.img} width='100%'/>
          }
          <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} paddingY={1} color={props.item.isSpecial && '#DC4200'}>
            {props.item.name}
          </Typography>
          <Typography color={props.item.isSpecial && '#DC4200'}>
            {props.item.description}
          </Typography>
        </Box>
      </Card>
    </Grid>
  )
}

export default MenuGridItem