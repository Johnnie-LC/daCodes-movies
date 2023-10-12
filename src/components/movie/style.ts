import styled from 'styled-components'

export const Item = styled.li`
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border-radius: 51px;
  background: gray;
  position: relative;

  &:hover > section{
    display: block;
  }
`
export const Image = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 50px;
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const InfoContainer = styled.section`
  display: none;
  background-color: #060ab5bf;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  padding: 60px 20px 20px 20px;
  line-height: normal;
  > p {
    font-size: 0.6rem;
    height: 120px;
    overflow: auto;
    text-align: justify;
  }
  > div {
    text-align: initial;
    text-overflow: ellipsis;
    overflow: hidden;
      h3 {
      text-align: justify;
      font-size: 0.8rem;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    span{
      font-size: 0.7rem;
    }
  }
  transition: display 1s;
`
