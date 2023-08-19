import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'

function Banner() {

  const [movie, setMovie] = useState();
  // useEffect is used to mount and unmount component
  useEffect(() => {
    //calling custom axios(not installed as such)
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then(
      (res)=>{        
        if (window.performance) {
          if (performance.navigation.type === 1) {
            // alert( "This page is reloaded" );
            var movieData = res.data.results[(Math.floor(Math.random() * 21))]
            console.log(movieData)
            // console.log(imageUrl+movie.backdrop_path)
            setMovie(movieData);
          } else {
            alert( "This page is not reloaded");
          }
        }
      })
  }, []);
  return (
    <div className='banner' style={{backgroundImage: `url(${movie? imageUrl+(movie.backdrop_path||movie.poster_path) : ""})`}}>
        <div className="content">
          {/* using ternary operator */}
            <h1 className="title">{movie ? movie.title||movie.name : ""}</h1>
            {/* <h1 className="title">{movie.title}</h1> */}
            <div className="banner_buttons">
                <span className="button">Play</span>
                <span className="button">My list</span>
            </div>
            <h2 className="description">
              {movie? movie.overview : ""}
            </h2>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}
console.log("Banner called")
export default Banner