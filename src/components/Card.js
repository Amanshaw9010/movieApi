import React from 'react'
import '../css/card.css'
import '../responsive/card_media.css'
import Container from './Container'

 

const Card = ({movie}) => {
  
  return (
    <>
    
      <div className='backdrop_card'>
        
          <div className='card_box_top'><h5>{movie.title}</h5> </div>
          <div className='card_box_middle'><img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} /> </div>
          <div className='card_box_bottom'>
          <p>    Rating : {movie.vote_average}</p>
           </div>
           <br />
           <div className='card_box_bottom'>
          <p>    Release : {movie.genre_ids.map((genre)=>{
            return  genre+" ";
          })}</p>
           </div>
        </div>
    </>
)
}


export default Card
