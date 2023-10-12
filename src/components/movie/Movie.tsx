import { type Movie } from '../../types'
import { createRating, getMainGenres } from '../../utils'
import { Item, List, Image, InfoContainer } from './style'

interface Props {
  movie: Movie
}

const MovieItem = ({ movie }: Props) => {
  return (
    <List>
        <Item>
            <Image src={'https://image.tmdb.org/t/p/w500' + movie.poster_path } alt={movie.title}/>
            <InfoContainer>
              <div>
                <h3>{movie.title}</h3>
                <span>{getMainGenres(movie)}</span>
              </div>
               <p>{movie.overview}</p>
              <span>
              {
                createRating({
                  rating: movie.vote_average
                })
              }
              </span>
            </InfoContainer>
        </Item>
    </List>
  )
}

export default MovieItem
