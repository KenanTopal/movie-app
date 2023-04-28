import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const MovieDetails = () => {
  const {id} = useParams();
  const [videoKey, setVideoKey] = useState();
  const [movieDetails, setMovieDetails] = useState();
  const baseUrl = "https://api.themoviedb.org/3";
	const movieDetailsUrl = `${baseUrl}/movie/${id}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
  const videoUrl = `${baseUrl}/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`;
  const imgUrl = "https://image.tmdb.org/t/p/w1280";

    useEffect(()=>{
      axios.get(movieDetailsUrl)
      .then(res=>{
        console.log(res.data)
        setMovieDetails(res.data)
      });
      axios.get(videoUrl).then(res=>{
        setVideoKey(res.data.results[0].key)
      })
      // eslint-disable-next-line
    },[])

  return (
    <div className='py-5 page' style={{backgroundColor:'#555'}}>
      <div className="container">
        <div className="card mb-3 bg-dark text-light shadow-lg">
          <div className="row">
            <div className="col-md-4">
              <img src={imgUrl+movieDetails?.poster_path} alt={movieDetails.title} className='img-fluid' />
            </div>
            <div className="col-md-8"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails

//2.09