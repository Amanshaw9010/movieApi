import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import {UserContext } from '../App'

const Logout = () => {

    const {state , dispatch} = useContext(UserContext);

    // promises 
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "appllication/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {
             
            dispatch({type:'USER', payload : false});
            navigate('/login');
           
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });


  return (
    <>

    <h1>logout ka page</h1>
      
    </>
  )
}

export default Logout
