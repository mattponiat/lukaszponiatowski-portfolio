//Styled-components
import styled from "styled-components";
//Components
import { Navbar } from "components/Header/Navbar";

const Header = () => {
  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export { Header };
