//Styles
import styled from "styled-components";
//Components
import { StyledLink } from "@components";

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink href="/home">HOME</StyledLink>
      <StyledLink href="/portfolio">PORTFOLIO</StyledLink>
      <StyledLink href="/kontakt">KONTAKT</StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 555px;
  width: 100%;
  min-height: inherit;
`;

export { Navbar };
