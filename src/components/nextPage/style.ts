import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`

export const Arrows = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArrowLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: rgba(81, 65, 234, 1);
  border-radius: 50%;
  transform: rotate(0deg);
  font-size: 2.5rem;
  border: 1px solid rgba(81, 65, 234, 1);
  
  &:hover{
    background-color: #1618ff;
    border-color: #1618ff;
  }
`

export const ArrowRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: rgba(81, 65, 234, 1);
  border-radius: 50%;
  transform: rotate(180deg);
  font-size: 2.5rem;
  border: 1px solid rgba(81, 65, 234, 1);

  &:hover{
    background-color: #1618ff;
    border-color: #1618ff;
  }
`

export const Text = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: white;
  margin: 0 10px;
`
