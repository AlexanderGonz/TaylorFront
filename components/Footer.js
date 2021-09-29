import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Logo } from "./styles/Navbar.styled"
import { StyledFooter } from "./styles/Footer.styled"

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Logo color="grey">
          TAYLOR <span> restaurant list</span>
        </Logo>
        <Flex>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</li>
            <li>+34 682 18 84 85</li>
            <li> erickalexander12@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Flex>

        <p>&copy; 2021 Taylor. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}

export default Footer