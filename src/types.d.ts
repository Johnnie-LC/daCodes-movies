export interface Movie {
  poster_path: string
  title: string
  id: number
  vote_average: number
  overview: string
  genre_ids: number[]

}

export type Filter = 'Latest' | 'now_playing' | 'popular' | 'top_rated' | 'upcoming'

export interface Login {
  email: string | null
  password: string | null
  validated: boolean
}
