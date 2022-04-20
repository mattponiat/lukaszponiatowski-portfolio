//Styled-components
import styled from "styled-components";
//Components
import DescContent from "components-ui/home/molecules/DescContent";
//Types
import { HomeDescSectionProps } from "types";

const DescSection = ({ desc1, desc2 }: HomeDescSectionProps) => {
  return (
    <Wrapper>
      <DescContent desc1={desc1} desc2={desc2} />
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

export default DescSection;
