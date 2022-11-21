import Button from "./styles/Button.styled";
import Flex from "./styles/Flex.styled";
import StyledHeader, { Image, Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png" />
        <div>
          <Button color="#a62440">Apply Courses</Button>
          <Button bg="#a62440">Talk to Advisor</Button>
        </div>
      </Nav>

      <Flex>
        <div>
          <h1>The IT Career of Your Dreams Starts Here!</h1>
          <p>
            Clarusway is a leading international software Bootcamp. Join a micro
            class online with other trainees and learn coding skills with a
            highly-skilled instructor.
          </p>
          <Button bg="#a62440">Start Your new Carier</Button>
        </div>
        <Image src="./images/hero.jpg" />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
