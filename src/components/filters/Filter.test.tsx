import { render, fireEvent, screen } from '@testing-library/react'
import { vi, describe, test, expect } from 'vitest'

import Filters from './Filters' // Import your Filters component

describe('Filters Component', () => {
  test('should render filter items and update selectedFilter', () => {
    render(<Filters setFilter={vi.fn()} />)

    // Find filter items and the selectedFilter element
    const filterItems = screen.getAllByTestId('filter-item')
    const selectedFilterElement = screen.getByTestId('selected-filter')

    expect(filterItems.length).toBe(5)

    const filters = ['Latest', 'Now Playing', 'Popular', 'Top rated', 'Upcoming']

    filterItems.forEach((filter, index) => {
      fireEvent.click(filter)
      expect(selectedFilterElement.innerText === filters[index]).toBeTruthy()
    })
  })
})
