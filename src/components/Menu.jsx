import { Box } from '@mui/material'
import Breakfast from './Breakfast'
import Lunch from './Lunch'
import { Element } from 'react-scroll'

function Menu() {
  return (
    <Box width="90%">
      <Element name="menu">
        <Breakfast/>
        <Lunch/>
      </Element>
    </Box>
  )
}
export default Menu