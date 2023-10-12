import React, { useState } from 'react'
import { type Filter } from '../../types'
import { FilterItem, FilterSelected, FiltersContainer, FiltersStyle } from './style'

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
}

const Filters: React.FC<Props> = ({ setFilter }) => {
  const filters = [
    {
      name: 'Latest',
      id: 1,
      click: () => { console.log('Latest') }
    },
    {
      name: 'Now Playing',
      id: 2,
      click: () => { setFilter('now_playing') }
    },
    {
      name: 'Popular',
      id: 3,
      click: () => { setFilter('popular') }
    },
    {
      name: 'Top rated',
      id: 4,
      click: () => { setFilter('top_rated') }
    },
    {
      name: 'Upcoming',
      id: 5,
      click: () => { setFilter('upcoming') }
    }
  ]
  const [selectedFilter, setSelectedFilter] = useState<string | null>('Latest')

  const generateFilterItem = (filter: { name: string, id: number, click: () => void }) => {
    const handleFilter = () => {
      filter.click()
      setSelectedFilter(filter.name)
    }

    return (
      <FilterItem
      key={filter.id}
      onClick={handleFilter}
      $isSelected={selectedFilter === filter.name}
      >
        {filter.name}
      </FilterItem>
    )
  }

  const filterItems = filters.map(generateFilterItem)

  return (
    <FiltersContainer>
      <FiltersStyle>{filterItems}</FiltersStyle>
      <FilterSelected>{selectedFilter}</FilterSelected>
    </FiltersContainer>
  )
}

export default Filters
