
import './App.css';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m= "auto">
      <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
          
        </Route>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
