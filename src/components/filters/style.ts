import styled from 'styled-components'

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 500;
`

export const FilterSelected = styled.span`
  text-align: left;
  font-weight: bolder;
  font-size: larger;
  margin-top: 50px;
  padding: 0 20px;
  
  @media (max-width: 1050px) {
        padding: 0 20px;
  }
`

export const FiltersStyle = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
  padding: 0 20px;

  @media (max-width: 1050px) {
        flex-direction: column;
        padding: 0 20px;
  }
`

const background = `
linear-gradient(102.31deg, 
  rgb(58 227 195) 12.56%,
  rgb(105 130 228 / 84%) 85.09%, 
  #725efb 99.05%)
`

export const FilterItem = styled.li<{ $isSelected?: boolean }>`
  background: ${props => props.$isSelected ? '#563FF0' : background};
  padding: 5px 30px;
  border-radius: 30px;
  font-size: 30px;
  font-weight: 500;
  border: 1px solid black; 
  &:hover{
    cursor: pointer;
    border-color: #646cff;
  }
`
