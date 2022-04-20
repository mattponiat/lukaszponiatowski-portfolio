//Styled-components
import styled from "styled-components";
//Components
import Desc from "components-ui/home/atoms/Desc";
//Types
import { HomeDescSectionProps } from "types";

const DescContent = ({ desc1, desc2 }: HomeDescSectionProps) => {
  return (
    <Wrapper>
      <Desc desc={desc1} />
      <Desc desc={desc2} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  padding: 10px;
`;

export default DescContent;
