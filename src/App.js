/*import 'footer' from './components/footer';
import 'Navbar' from './components/Navbar';
import 'ExerciseDetails' from './Pages/ExerciseDetails';
import 'Home' from './Pages/Home';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';


const App= ()=> {
  return (
    

    <Box width="400px">
    <Navbar/>
    <Routes>
     <Route path="/" element={< Home />}/>
     <Route path="/exercise/:id" element={<ExerciseDetails />}/>
    </Routes>
    <footer />
    </Box>


  );
}

export default App;
*/


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';  // Fix 1: Use curly braces for import
import ExerciseDetails from './Pages/ExerciseDetails';  // Fix 1: Use curly braces for import
import Home from './Pages/Home';  // Fix 1: Use curly braces for import
import Footer from './components/footer';  // Fix 1: Use curly braces for import
import './App.css';

const App = () => {
  return (
    <Box width="400px" sx={{ width:{xl:'1488px'}}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer /> 

    </Box>
  );
}

export default App;
