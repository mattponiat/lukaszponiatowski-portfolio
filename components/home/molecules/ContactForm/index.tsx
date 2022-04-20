import * as React from "react";
//Styled-components
import styled from "styled-components";
//Components
import ContactFormLabel from "components-ui/home/atoms/ContactFormLabel";
import Input from "components-ui/home/atoms/Input";

const ContactForm = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Wrapper>
      <ContactFormLabel>Imię i nazwisko</ContactFormLabel>
      <Input type="text" />
      <ContactFormLabel>Email</ContactFormLabel>
      <Input type="email" />
      <ContactFormLabel>Wiadomość</ContactFormLabel>
      <StyledTextArea
        required
        autoComplete="on"
        minLength={10}
        maxLength={150}
        onChange={(e) => setCount(e.target.value.length)}
      ></StyledTextArea>
      <StyledSpan>{count} of 150 max characters</StyledSpan>
      <StyledSubmit type="submit">WYŚLIJ</StyledSubmit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 488px;
  width: 100%;
  min-height: inherit;
`;

const StyledTextArea = styled.textarea`
  max-width: 100%;
  width: 100%;
  min-height: 150px;
  padding: 10px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-family: ${({ theme }) => theme.font.family[700]};
  resize: vertical;

  :focus-visible {
    outline: 1px groove ${({ theme }) => theme.colors.text.homeText};
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.text.header};
  font-size: ${({ theme }) => theme.font.size.xsmall};
  font-family: ${({ theme }) => theme.font.family[400]};
`;

const StyledSubmit = styled.button`
  align-self: center;
  padding: 15px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.mainRed};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.xxsmall};
  font-family: ${({ theme }) => theme.font.family[700]};
  letter-spacing: 2px;
  cursor: pointer;
`;

export default ContactForm;
