//Styled-components
import styled from "styled-components";

const Desc = ({ desc }: { desc: string }) => {
  return <StyledText>{desc}</StyledText>;
};

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text.homeText};
  font-size: ${({ theme }) => theme.font.size.small};
  text-align: justify;
  line-height: 25.2px;
`;

export default Desc;
