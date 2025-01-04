import { Box } from '@mui/material'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/home'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import './fonts.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


const theme = createTheme({
  palette: {
    text: {
      primary: '#AD5100',
    }
  },
  typography: {
    fontFamily: 'Urbanist, LeagueSpartans, sans-serif',
    h1: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 58
    },
    h2: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 50,
    },
    h3: {
      fontFamily: 'LeagueSpartans, sans-serif',
      fontWeight: 400,
      fontSize: 28,
    },
    h4: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 36,
    },
    h5: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 20,
    },
    body1: {
      fontFamily: 'LeagueSpartans, sans-serif',
      fontWeight: 400,
      fontSize: 16,
    },
    mobileh1: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 28
    },
    mobileh2: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 24,
    },
    mobileh3: {
      fontFamily: 'LeagueSpartans, sans-serif',
      fontWeight: 400,
      fontSize: 14,
    },
    mobileh4: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 18,
    },
    mobileh5: {
      fontFamily: 'Urbanist, sans-serif',
      fontWeight: 700,
      fontSize: 12,
    },
    mobilebody1: {
      fontFamily: 'LeagueSpartans, sans-serif',
      fontWeight: 400,
      fontSize: 12,
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Navbar/>
        <Home/>
        <About/>
        <Menu/>
        <Contact/>
      </Box>
    </ThemeProvider>
  )
}

export default App
