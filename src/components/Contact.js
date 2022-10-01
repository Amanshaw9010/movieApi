import React, { useState } from 'react'
import { useEffect } from 'react';
import '../css/contact.css'



const Contact = () => {
  
  let blank = document.getElementById('blank');

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
      setContactUser({ ...ContactUser, message: " " });
      blank.value = " ";
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


      const userContactData = await res.json();
      setUserContact(userContactData);

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
        <div className="contact_main">
          <h1>Contact form</h1>
          <label htmlFor="#">Name</label>
          <input type="text" name='name' onChange={handleInput} value={userContact.name} />

          <label htmlFor="#">Email</label>
          <input type="email" name='email' onChange={handleInput} value={userContact.email} />

          <label htmlFor="#">Phone No.</label>
          <input type="number" name='phone' onChange={handleInput} value={userContact.phone} />

          <label htmlFor="#">Message</label>
          <textarea name="message" id="blank" cols="60" rows="10" onChange={handleInput}></textarea>

          <input type="submit" className='contact_btn' name='submit' onClick={contactForm} />
        </div>
      </div>
    </>
  )
}

export default Contact
