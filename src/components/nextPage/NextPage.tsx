import { ArrowLeft, Arrows, Container, Text, ArrowRight } from './style'
import { MdArrowBackIosNew } from 'react-icons/md'

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

        <ArrowLeft onClick={handlePreviousPage}>
          <MdArrowBackIosNew />
        </ArrowLeft>

        <Text>
          <span>{page}/{page + 1}</span>
        </Text>

        <ArrowRight onClick={handleNextPage}>
          <MdArrowBackIosNew />
        </ArrowRight>

      </Arrows>
    </Container>
  )
}

export default NextPage
