import React from 'react'
import MovieCard from '../MovieC/MovieCard'

const MovieList = ({movies , filter,rating}) => {
  return (
    <div className='movieList'>
{movies
.filter(movie=>
  movie.title.toUpperCase().includes(filter.toUpperCase())&&
  movie.rate >= rating
)
.map((movie)=>(
<MovieCard movie={movie} key={movie.id} />

)

)}

    </div>
  )
}

export default MovieList