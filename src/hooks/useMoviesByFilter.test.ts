import { act, cleanup, renderHook, waitFor } from '@testing-library/react'
import { describe, test, expect, afterEach } from 'vitest'

import { useMoviesByFilter } from './useMoviesByFilter'

describe('useMoviesByFilter hook', () => {
  afterEach(cleanup)

  test('should fetch the movies', async () => {
    const { result } = renderHook(() => useMoviesByFilter())
    expect(result.current.movies.length).toBe(0)

    await waitFor(() => {
      expect(result.current.movies.length).toBeGreaterThan(0)
    })
    expect(result.current.movies.length).toBe(20)
  })

  test('should fetch the movies for the selected filter', async () => {
    const { result } = renderHook(() => useMoviesByFilter())

    await waitFor(() => {
      expect(result.current.movies.length).toBeGreaterThan(0)
    })

    expect(result.current.filter === 'now_playing').toBeTruthy()

    act(() => { result.current.setFilter('top_rated') })

    expect(result.current.filter === 'top_rated').toBeTruthy()
  })

  test('should fetch the movies for the selected page', async () => {
    const { result } = renderHook(() => useMoviesByFilter())

    await waitFor(() => {
      expect(result.current.movies.length).toBeGreaterThan(0)
    })

    expect(result.current.page).toBe(1)

    act(() => { result.current.setPage(2) })

    expect(result.current.page).toBe(2)
  })
})
