export interface Movie {
  poster_path: string
  title: string
  id: number
}

export type Filter = 'Latest' | 'now_playing' | 'popular' | 'top_rated' | 'upcoming'
