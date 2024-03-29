import React, { useContext } from 'react'
import { MovieContext } from '../context/MoviesContext';
import MovieCard from '../components/MovieCard/MovieCard'

const Home = () => {

  const {movies} = useContext(MovieContext)
  return (
    <div className='d-flex justify-content-center flex-wrap page' style={{background: "#555"}}>
      {movies.map(movie=> <MovieCard movie={movie} key={movie.id} />)}
    </div>
  )
}

export default Home