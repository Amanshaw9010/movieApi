import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { UserContext } from '../App'
import '../css/navbar.css'
import logo from '../img/logo1.png'
import user from '../img/user.png'
// import Logout from './Logout'
import '../responsive/navbar_media.css'



const Navbar = () => {

  const { state, dispatch } = useContext(UserContext);
  console.log(state);

  const Toggle = () => {
    if (state) {
      return (
        <>
          <a href="/logout"> <h2>logout</h2> </a>

        </>
      )
    } else {
      return (
        <>
          <a href="/signup"><h2>Sign up</h2></a><hr />
          <a href="/login"><h2>Login</h2></a><hr />

        </>
      )
    }
  }








  const [userName, setUserName] = useState(" ");
  const userDp = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });


      const welData = await res.json();
      setUserName(welData.name);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    userDp();
  }, [])


  let [bg, setbg] = useState('white');
  let [mode, setMode] = useState('Dark Mode')
  let [isActive, setIsActive] = useState(false);

  let url = "https://joeschmoe.io/api/v1/" + `${userName}`;

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
            {/* <a href="/logout"> <h2>logout</h2> </a> */}
            <a href="#" onClick={handleClick} > <h2>{mode}</h2> </a>

            <img src={url} className="user_img" onClick={(e) => setIsActive(!isActive)} />
          </div>

          {isActive && (

            <div className="menu_wrap">

              <Toggle />

            </div>

          )}



        </div>

      </div>
    </>
  )
}

export default Navbar
