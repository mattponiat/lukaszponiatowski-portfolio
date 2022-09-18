//Styles
import styled from "styled-components";

const ListElement = ({
  icon,
  text,
}: {
  icon: React.ReactElement;
  text: string;
}) => {
  return (
    <Wrapper>
      <StyledIcon>{icon}</StyledIcon>
      <StyledText>{text}</StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  max-width: 100%;
  min-height: auto;
  margin-bottom: 10px;
  -ms-word-break: break-all;
  word-break: break-all;
  white-space: pre-wrap;
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 600;
  letter-spacing: 0.4px;
`;

const StyledIcon = styled.div`
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.large};
  transition: background-color 0.3s;
`;

export { ListElement };
