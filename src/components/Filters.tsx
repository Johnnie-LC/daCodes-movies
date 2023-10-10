import styled from 'styled-components'
import { type Filter } from '../types'

const FiltersStyle = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 20px;
  list-style: none;
`

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<Filter>>
}
const Filters = ({ setFilter }: Props) => {
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

  return (
      <div>
        <FiltersStyle>
          {
            filters.map(
              filter => (
                <li
                key={filter.id}
                onClick={filter.click}>
                    {filter.name}
                </li>
              ))
          }
        </FiltersStyle>
      </div>
  )
}

export default Filters
