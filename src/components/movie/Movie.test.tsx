import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import MovieItem from './Movie' // Import your MovieItem component

const mockMovie = {
  poster_path: '/example.jpg',
  title: 'Example Movie',
  id: 1,
  vote_average: 8.5,
  overview: 'An example movie overview',
  genre_ids: [12, 28]
}

describe('MovieItem Component', () => {
  afterEach(cleanup)
  test('should render movie details', () => {
    render(<MovieItem movie={mockMovie} />)

    // Find elements within the component
    const titleElement = screen.getByText(mockMovie.title)
    const genresElement = screen.getByText('Action/Adventure') // Replace with actual genre names
    const overviewElement = screen.getByText(mockMovie.overview)
    const ratingElement = screen.getByText('★★★★☆') // Replace with actual rating

    // Check if the elements are rendered
    expect(titleElement).toBeDefined()
    expect(genresElement).toBeDefined()
    expect(overviewElement).toBeDefined()
    expect(ratingElement).toBeDefined()
  })

  test('should render the movie poster with the correct alt text', () => {
    render(<MovieItem movie={mockMovie} />)

    // Find the image element by alt text
    const imageElement = screen.getByAltText(mockMovie.title)

    // Check if the image is rendered and has the correct alt text
    expect(imageElement).toBeDefined()
  })
})
