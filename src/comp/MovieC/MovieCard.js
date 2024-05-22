import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FBRata from '../fbyrate/FBRata';
import{Link }from 'react-router-dom';


const MovieCard = ({movie}) => {
  return (
    <div style={{paddingTop:'2px',paddingBottom:'20px'}}>
<Card style={{ width: '16rem',backgroundColor:'rgb(123, 161, 118)' } }>
      <Card.Img variant="top" src={movie.posterUrl}style={{ height:'350px',backgroundColor:'rgb(123, 161, 118)' } }/>
      <Card.Body >
        <Card.Title>{movie.title}</Card.Title>
        <FBRata isMovieRating={true} movieRating={movie.rate}/>
        <Card.Text style={{width:'200px'}}>{movie.description}</Card.Text>

                     {/* button */}
        <Link to={`/movie/${movie.id}`} state={movie} >
        <Button style={{backgroundColor:'rgb(123, 161, 118)',color:'black',borderColor:'black', boxShadow: '4 4px 4px rgba(0, 0, 0, 0.5)'}
      } ><e>Description</e></Button>
</Link>


      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard