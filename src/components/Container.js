import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../css/container.css'
import '../responsive/container_media.css'


const Container = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=6fc1c242b9f6b756db34c416105debf0";

  const [popular, setPopular] = useState([]);
  let [text, settext] = useState([]);
  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
  };

  
  function handClick(event) {
    settext(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={handClick} />
      <p>{text}</p>
      <div className="App">
        <h1>Popular Movies 2022</h1>
        <div className='backdrop_container'>

          <div className="popular-movies">
            {popular.map((movie) => {
              return <Card key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
    </>




  )
}



export default Container
