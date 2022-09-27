import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../css/container.css'
import '../responsive/container_media.css'


const Container = () => {

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=6fc1c242b9f6b756db34c416105debf0";

  const [popular, setPopular] = useState([]);
  const [userdata, setUserData] = useState("");

  const userWelcome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });


      const welData = await res.json();
      setUserData(welData.name);

    } catch (error) {
      console.log(error);
    }
  }

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies.results);
    setPopular(movies.results);
  };



  useEffect(() => {
    userWelcome();
    fetchPopular();
  }, [])

  return (
    <>

      <div className='weldiv' >
        <h1 className='welcome'>Welcome {userdata} to home page</h1>
      </div>
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