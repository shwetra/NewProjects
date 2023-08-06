import './App.css';
import { Box } from '@chakra-ui/react';
import Footer from './Components/Footer';
import  Navbar  from './Components/Navbar';
import { AllRoutes } from './Components/AllRoutes';
import Login from './Components/Login';
;

function App() {
  return (
    <Box className="App">
      <Box h={{base:"100px",md:"55px"}}><Navbar/></Box>
      
     <AllRoutes/>
  
    <Footer/>
    </Box>
  );
}

export default App;
