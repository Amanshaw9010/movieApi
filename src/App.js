import Navbar from './components/Navbar.js'
import Container from './components/Container'
import Footer from './components/Footer.js';
import Contact from './components/Contact'
import Comment from './components/Comment'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Comment />
      <Footer />
    </>
  );
}
export default App;