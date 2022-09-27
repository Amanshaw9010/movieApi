import React, { useState } from 'react'
import { useEffect } from 'react';
import '../css/contact.css'



const Contact = () => {

  const [ContactUser, setContactUser] = useState({ name: "", email: "", phone: "", message: "" })
  const [userContact, setUserContact] = useState("");


  let name, value;

  const handleInput = (event) => {
    name = event.target.name;
    value = event.target.value;
    console.log(name);
    setContactUser({ ...ContactUser, [name]: value });
  }


  const contactForm = async (e) => {
    e.preventDefault()

    const { name, email, phone, message } = ContactUser;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();
    if (!data) {
      console.log("message not found");
    } else {
      alert("message sent");
      setContactUser({...ContactUser, message: " " });
    }
  }


  const userDetails = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });


      const userContact = await res.json();
      setUserContact(userContact);

    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    userDetails();

  }, [])




  return (
    <>
      <div className='contact'>
        <h1>company name</h1>
        <h4>Founder : Aman kumar</h4>
        <h4>Phone : 999999999</h4>
        <h4>Feild : UI/UX Designer</h4>
      </div>


      <div className='contact-form'>
        <label htmlFor="#">Name</label>
        <input type="text" name='name' onChange={handleInput} value={userContact.name} />

        <label htmlFor="#">Email</label>
        <input type="email" name='email' onChange={handleInput} />

        <label htmlFor="#">Phone No.</label>
        <input type="number" name='phone' onChange={handleInput} />

        <label htmlFor="#">Message</label>
        <textarea name="message" cols="80" rows="10" onChange={handleInput}></textarea>

        <input type="submit" name='submit' onClick={contactForm} />
      </div>
    </>
  )
}

export default Contact
