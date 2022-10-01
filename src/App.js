import Navbar from './components/Navbar.js'
import Container from './components/Container'
import Footer from './components/Footer.js';
import Contact from './components/Contact'
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useReducer,createContext} from 'react';
import { initialState,reducer } from './reducer/Userreducer.js'; 



//creating use context 
export const UserContext = createContext();

  const Routing = ()=>{
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="logout" element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
    )
  }
function App() {


  const [state,dispatch]= useReducer(reducer,initialState);

  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar />
     <Routing/>
      <Footer />
    </UserContext.Provider>
    </>
  );
}
export default App;