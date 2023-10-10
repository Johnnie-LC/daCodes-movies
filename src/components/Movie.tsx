import styled from 'styled-components'
import { type Movie } from '../types'

const Item = styled.li`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 51px;
  background: gray;
`
const Image = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 50px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

interface Props {
  movie: Movie
}
const MovieItem = ({ movie }: Props) => {
  return (
    <List>
        <Item>
            <Image src={'https://image.tmdb.org/t/p/w500' + movie.poster_path } alt={movie.title}/>
                {/* <TitleCard>{movie.title}</TitleCard> */}
                {/* <Description>{movie.overview}</Description> */}
        </Item>
    </List>
  )
}

export default MovieItem
