//Styled-components
import styled from "styled-components";
//Components
import { StyledIcon } from "./StyledIcon";

const ListItem = ({
  icon,
  text,
}: {
  icon: React.ReactElement;
  text: string;
}) => {
  return (
    <Wrapper>
      <StyledIcon icon={icon} />
      <StyledSpan>{text}</StyledSpan>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledSpan = styled.span`
  margin-left: 25px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-weight: 800;
  letter-spacing: 1px;
`;

export { ListItem };
