import { useMoviesByFilter } from '../../hooks/useMoviesByFilter'
import { useAuth } from '../AuthContext'
import Filters from '../filters/Filters'
import MovieItem from '../movie/Movie'
import NextPage from '../nextPage/NextPage'
import { Container, Section } from './style'

export const MovieList = () => {
  const {
    setFilter,
    movies,
    setPage,
    page
  } = useMoviesByFilter()

  const { token } = useAuth()
  console.log({ token })

  return (
        <Container>
          <Filters setFilter={setFilter}/>
          <Section>
            {token && movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
          </Section>
          <NextPage setPage={setPage} page={page} />
        </Container>
  )
}
