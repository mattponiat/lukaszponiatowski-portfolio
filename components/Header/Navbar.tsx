//Styled-components
import styled from "styled-components";
//Components
import { StyledLink } from "components/Header/StyledLink";

const Navbar = () => {
  return (
    <Wrapper>
      <StyledLink href="/">HOME</StyledLink>
      <StyledLink href="/portfolio">PORTFOLIO</StyledLink>
      <StyledLink href="/o-mnie">O MNIE</StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 555px;
  width: 100%;
  min-height: inherit;
`;

export { Navbar };
