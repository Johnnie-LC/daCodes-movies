import '../App.css'
import styled from 'styled-components'
import NextPage from '../components/NextPage'
import MovieItem from '../components/Movie'
import Filters from '../components/Filters'
import { useMoviesByFilter } from '../hooks/useMoviesByFilter'
// import { useRequestToken } from '../hooks/useRequestToken'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: 20px;
`

const Section = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 0;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

function App () {
  // const { token } = useRequestToken()

  const {
    setFilter,
    movies,
    setPage,
    page
  } = useMoviesByFilter()

  return (
    <Container>
      <Title>Películas más recientes</Title>
      <Filters setFilter={setFilter}/>
      <Section>
        {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
        ))}
      </Section>
      <NextPage setPage={setPage} page={page} />
    </Container>
  )
}

export default App
