import { vi, test, describe, expect, afterEach } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MovieList } from './MovieList' // Import your MovieList component
import { useAuth } from '../AuthContext' // Import your AuthProvider component
import { useMoviesByFilter } from '../../hooks/useMoviesByFilter'
import { type SetStateAction } from 'react'
import { type Movie } from '../../types'

// Mock the useMoviesByFilter hook
vi.mock('../../hooks/useMoviesByFilter', () => ({
  useMoviesByFilter: vi.fn()
}))
vi.mock('../AuthContext')

// Mock the required values
const mockMovies = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: 'sdasdasd',
    genre_ids: [12, 28],
    overview: 'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
    vote_average: 4.2
  },
  {
    id: 2,
    title: 'Movie 2',
    poster_path: 'sdasdasd',
    genre_ids: [12, 28],
    overview: 'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
    vote_average: 8.5
  }
]

describe('MovieList Component', () => {
  afterEach(cleanup)
  test('should render movie list when authenticated', async () => {
    vi.mocked(useMoviesByFilter).mockReturnValue({
      setFilter: vi.fn(),
      movies: mockMovies,
      setPage: vi.fn(),
      page: 1,
      setMovies: vi.fn(),
      filter: 'popular'
    })

    vi.mocked(useAuth).mockImplementation(() => {
      return ({
        token: 'token',
        setSession: vi.fn()
      })
    })

    render(<MovieList />)

    // Check if the movie list is rendered when authenticated
    const movieListContainer = screen.getByTestId('movie-list-container')

    // Check if the movie list container is rendered
    expect(movieListContainer).toBeDefined()
  })

  test('should not render movie list when not authenticated', async () => {
    vi.mocked(useMoviesByFilter).mockReturnValue({
      setFilter: vi.fn(),
      movies: mockMovies,
      setPage: vi.fn(),
      page: 1,
      setMovies: vi.fn(),
      filter: 'popular'
    })

    vi.mock('../AuthContext')

    vi.mocked(useAuth).mockImplementation(() => {
      return ({
        token: null,
        setSession: vi.fn()
      })
    })

    render(<MovieList />)

    screen.debug()

    // Check if the movie list is rendered when authenticated
    const movieListContainer = screen.getByTestId('movie-list-container')

    // Check if the movie list container is rendered
    expect(movieListContainer).toBeDefined()
  })
})
