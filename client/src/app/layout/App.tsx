import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container } from "@mui/material";
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Pages
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";
import ServerError from '../errors/ServerError';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark':'light';
  
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light'? '#eaeaea':'#121212'
      }
    }
  })

  function handleThemeChange(){
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={theme} >
      <ToastContainer position='bottom-right'/>
      <CssBaseline/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>     
      <Container>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/catalog' component={Catalog}/>
          <Route path='/catalog/:id' component={ProductDetails}/>
          <Route path='/about' component={AboutPage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route path='/server-error' component={ServerError}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
