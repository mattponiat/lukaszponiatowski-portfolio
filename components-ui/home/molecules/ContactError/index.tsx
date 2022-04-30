//Styled-components
import styled from "styled-components";
//Components
import ContactResetButton from "components-ui/home/atoms/ContactResetButton";
//Types
import { resetFormType } from "types";

const ContactError = ({ resetForm }: resetFormType) => {
  return (
    <Wrapper>
      <StyledText>Ups, coś poszło nie tak!</StyledText>
      <ContactResetButton onClick={resetForm}>
        Wyślij ponownie
      </ContactResetButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  place-self: center;
  top: 30%;
`;

const StyledText = styled.p`
  max-width: 100%;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.large};
  font-family: ${({ theme }) => theme.font.family[700]};
  letter-spacing: 2px;
`;

export default ContactError;
