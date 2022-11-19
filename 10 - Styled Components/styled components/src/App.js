import { Button, TomatoButton } from "./components/Button.styled";
import Container from "./components/Container.styled";
import HeaderText from "./components/HeaderText.styled";
import StyledLink from "./components/Link.styled";

const App = () => {
  return (
    <>
      <Container bg="grey">
        <HeaderText color="hotpink">Styled Components</HeaderText>
        <Button primary>Save</Button>
        <Button>Clear</Button>
        <TomatoButton>Send</TomatoButton>
        <TomatoButton primary>Submit</TomatoButton>
      </Container>
      <Container bg="#eeccee">
        <StyledLink href="https://styled-components.com/" target="_blank">Styled Components</StyledLink>
        <StyledLink secondary href="https://reactjs.org/" target="_blank">React</StyledLink>
      </Container>
    </>
  );
};

export default App;
