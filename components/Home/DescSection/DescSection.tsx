//Styled-components
import styled from "styled-components";
//Components
import { DescContent } from "./DescContent";

const DescSection = () => {
  return (
    <Wrapper>
      <DescContent />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  max-width: 100%;
  min-height: 40vh;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

export { DescSection };
