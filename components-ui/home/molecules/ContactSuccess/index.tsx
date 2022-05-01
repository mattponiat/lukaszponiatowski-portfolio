//Styled-components
import styled from "styled-components";
//Components
import ContactResetButton from "components-ui/home/atoms/ContactResetButton";
//Types
import { resetFormType } from "types";

const ContactSuccess = ({ resetForm }: resetFormType) => {
  return (
    <Wrapper>
      <StyledText>Wiadomość została wysłana!</StyledText>
      <ContactResetButton type="reset" onClick={resetForm}>
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
  font-weight: ${({ theme }) => theme.font.weight[700]};
  letter-spacing: 2px;
`;

export default ContactSuccess;
