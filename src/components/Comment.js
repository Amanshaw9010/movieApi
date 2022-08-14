import React, { useState } from 'react'
import '../css/Comment.css'

const Comment = () => {

  const [text, settext]= useState('your comment is here..');
  const [display , setdisplay]= useState('none');
  const [display2,setdisplay2]= useState('block');
  let value = "";

  function handleEvent(event){
    settext(event.target.value)
    
  }

  function showComment(){
    setdisplay('block')
    setdisplay2('none')
  }
   
  function delete_cmt(){
    setdisplay('none')
  }
  
  

  return (
    <>
    <div className="Comment_main">
    <div className='comment_box'>
    <h2 >Comment Section</h2>
    <br />
        <textarea  onChange={handleEvent}   cols="30" rows="5" style={{display:display2}}></textarea>
        <br />
        <input type="submit"  onClick={showComment}/>
    </div>

    <div className='view_comment'>
       <div className='view_comment_box' style={{display:display}}>
        <div className='comment'>{text}</div>
        <div className='delete_commetn' onClick={delete_cmt}><h2>Delete</h2></div>

       </div>

    </div>
   
    </div>
      
    </>
  )
}

export default Comment
