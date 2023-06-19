// import logo from './logo.svg';
import './App.css';

import Seminar from './Pages/Seminars/Seminars';
import Navbar from './Pages/Layout/Navbar';
import Recipes from './Pages/Food-recipes/Recipes';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Drug from './Pages/drug/drug';
import Footer from './Pages/Layout/Footer';
import About from './Pages/About-us/About';
import Food from './Pages/Food/Food';
import Contact from './Pages/Contact/Contact';

import Login from './Pages/Loge&Sign/Login';
import Signin from './Pages/Loge&Sign/Signin';


// insaid Element inpote Name Component
function App() {
  return (
   
      <BrowserRouter>
    <Navbar/>
      <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Recipes" element={<Recipes />} />
    <Route path="/Seminar" element={<Seminar />} />
    <Route path="/About" element={<About/>} />

    <Route path="/Food" element={<Food/>} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/drug" element={<Drug />} />
<Route path="/Login" element={<Login/>}/>
<Route path="/Sigin" element={<Signin/>}/>
{/* malak */}
  
   </Routes>
   <Footer/>
   </BrowserRouter>
   
 
  );
}

export default App;
