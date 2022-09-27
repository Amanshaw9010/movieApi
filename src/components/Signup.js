import React, { useState } from 'react'
import '../css/signup.css'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", phone: "", email: "", work: "", password: "", cPassword: "" });


    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });
    }


    const postData = async (e) => {
        e.preventDefault()
        const { name, phone, email, work, password, cPassword } = user;
        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, phone, email, work, password, cPassword })

        })

        const data = await res.json();
       
        if (data.status === 422 || !data) {
            window.alert("invaild regestration")
        }else{
            window.alert(" regestration sucessfull")
            navigate('/login');
        }


    }



    return (
        <>
            <div className="signup_main">

                <form action="#" className="signup_form">
                    <h1 className="new_regestation">New Regestation</h1>
                    <label htmlFor="">NAME</label>
                    <input type="text"
                        name="name"
                        onChange={handleInputs} />


                    <label htmlFor="#">PHONE NO.</label>
                    <input type="number"
                        name="phone"
                        onChange={handleInputs} />

                    <label htmlFor="#">EMAIL</label>
                    <input type="email"
                        name="email"
                        onChange={handleInputs} />

                    <label htmlFor="#">WORK</label>
                    <input type="text"
                        name="work"
                        onChange={handleInputs} />

                    <label htmlFor="#">PASSWORD</label>
                    <input type="password"
                        name="password"
                        onChange={handleInputs} />

                    <label htmlFor="#">CONFIRM PASSWORD</label>
                    <input type="password"
                        name="cPassword"
                        onChange={handleInputs} />

                    <input type="submit" value="Register"
                        name="signup"
                        className="Register_btn"
                        onClick={postData} />

                </form>
            </div>


        </>
    )
}

export default Signup


