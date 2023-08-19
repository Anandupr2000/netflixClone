import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import { imageUrl, API_KEY } from "../../constants/constants"
import axios from '../../axios';
import YouTube from 'react-youtube';

function RowPoster(props) {
  const [movies, setMovies] = useState([]);
  const [youtubeUrl, setYoutubeUrl] = useState('');
  useEffect(() => {
    axios.get(props.url)
      .then((res) => {
        // console.log(res.data)
        setMovies(res.data.results)
      })
    // .catch((err)=>alert(`"Network error : + ${err}"`))
  }, []);

  // for embeding iframe from youtube
  // const options = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     autoplay: 0,
  //   },
  // };
  const setUrl = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&with_networks=213`)
      .then((res) => {
        console.log(res.data.results.length)
        console.log(res.data.results)
        if (res.data.results.length !== 0) setYoutubeUrl("https://www.youtube.com/embed/" + res.data.results[0].key+"?autoplay=1")
        else alert("No youtube trailer found");
      })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map((obj, index) => {
            // console.log(index)
            return <img className={props.isSmall ? 'smallPoster' : 'poster'}
              onClick={() => setUrl(obj.id)}
              src={`${imageUrl + (obj.backdrop_path || obj.poster_path)}`} alt="poster" />
            // return obj
          })}
      </div>
      {/* <YouTube opts={options} videoId="2g811Eo7K8U"/> */}
      {/* and operator for checking both true then show trailer */}
      {youtubeUrl && <iframe width="100%" height="315" src={youtubeUrl} title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>}
      {/* <iframe src="" frameborder="0"></iframe> */}
    </div>
  )
}

export default RowPoster