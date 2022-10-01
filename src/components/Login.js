import React, { useState } from 'react'
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import {UserContext } from '../App'

const Login = () => {
    const navigate = useNavigate();
     const {state , dispatch} = useContext(UserContext);
    const [loginUser, setloginUser] = useState({ email: "", password: "" })

    let name, value;

    const loginHandle = (event) => {
        name = event.target.name;
        value = event.target.value;
        setloginUser({ ...loginUser, [name]: value });
    }

    console.log(loginUser);

    const loginData = async (event) => {
        event.preventDefault()
        const { email, password } = loginUser;
        if (!email || !password) {
            console.log("please enter the credentials");
        } else {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })


            const data = await res.json();
            navigate('/');
            dispatch({type:'USER', payload: true});
           
        }
    }


    return (
        <>
            <div className="login_main">
                <div className="form_container">
                    <h1>Login </h1>
                    <form action="#">
                        <input type="text" name="email" placeholder="Email" onChange={loginHandle} /><br />

                        <input type="password" name="password" placeholder="Password" onChange={loginHandle} /> <br />

                        <input type="submit" className="login_submit" onClick={loginData} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
