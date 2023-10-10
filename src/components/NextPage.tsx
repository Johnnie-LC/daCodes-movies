import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Arrows = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArrowLeft = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  transform: rotate(-45deg);
`

const ArrowRight = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  transform: rotate(45deg);
`

const Text = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: white;
  margin: 0 10px;
`

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
}

const NextPage = ({ setPage, page }: Props) => {
  const handleNextPage = () => {
    setPage(page + 1)
  }

  const handlePreviousPage = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  return (
    <Container>
      <Arrows>
        <ArrowLeft onClick={handlePreviousPage}/>
        <Text>
          <h3>{page}/{page + 1}</h3>
        </Text>
        <ArrowRight onClick={handleNextPage}/>
      </Arrows>
    </Container>
  )
}

export default NextPage
