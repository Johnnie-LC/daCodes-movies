import { type Movie } from './types'
import { GENRE } from './constants'

interface RatingOptions {
  rating: number
  total?: number
  starIcon?: string
  emptyIcon?: string
}

export const createRating = ({
  rating,
  total = 5,
  starIcon = '★',
  emptyIcon = '☆'
}: RatingOptions) => {
  const roundRating = Math.round(rating * total / 10)
  const stars = starIcon.repeat(roundRating)
  const empty = emptyIcon.repeat(total - roundRating)
  return stars + empty
}

export const getMainGenres = (movie: Movie) => {
  const genres = movie.genre_ids.slice(0, 2).reduce((ac: string, cu: number) => {
    return ac === '' ? `${GENRE[cu]}` : `${GENRE[cu]}/${ac}`
  }, '')

  return genres
}
