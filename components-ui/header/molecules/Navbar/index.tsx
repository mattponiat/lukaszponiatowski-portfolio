//Styled-components
import styled from "styled-components";
//Components
import HeaderLink from "components-ui/header/atoms/HeaderLink";

const Navbar = () => {
  return (
    <Wrapper>
      <HeaderLink href="/">HOME</HeaderLink>
      <HeaderLink href="/portfolio">PORTFOLIO</HeaderLink>
      <HeaderLink href="/o-mnie">O MNIE</HeaderLink>
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

export default Navbar;
