import Navbar from './components/Navbar.js'
import Container from './components/Container'
import Footer from './components/Footer.js';
import Contact from './components/Contact'
 
import Signup from './components/Signup.js';
import Login from './components/Login.js';

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from './components/Logout.js';

function App() {

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </>
  );
}
export default App;