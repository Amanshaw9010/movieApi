import { useState } from 'react'
import '../css/navbar.css'
import logo from '../img/logo1.png'
import '../responsive/navbar_media.css'


const Navbar = () => {


  let [bg, setbg] = useState('white');
  let [mode, setMode] = useState('Dark Mode')

  const handleClick = () => {
    if (bg == 'white') {
      setbg('black')
      setMode('Light Mode');

    } else {
      setbg('white');
      setMode('Dark mode')
    }
  }



  return (
    <>
      <div style={{ backgroundColor: bg }} className="backdrop_navbar">
        <div className="navbar_box">
          <div className="navbar_box_left">
            <img src={logo} alt="" />
          </div>
          <div className="navbar_box_middle">
          </div>
          <div className="navbar_box_right">
            <a href="/"> <h2>Home</h2> </a>
            <a href="/contact"> <h2>Contact</h2> </a>
            <a href="#"> <h2>Explore</h2> </a>
            <a href="#" onClick={handleClick} > <h2>{mode}</h2> </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
