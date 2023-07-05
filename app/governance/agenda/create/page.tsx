import ChoiceBox from "./content/ChoiceBox"
import HaveBox from "./content/HaveBox"
import { Container, Title, Wrapper } from "./styled/page.styled"

const CreateProposal = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Suggesting Vote</Title>
        <HaveBox></HaveBox>
        <ChoiceBox></ChoiceBox>
      </Wrapper>
    </Container>
  )
}

export default CreateProposal
