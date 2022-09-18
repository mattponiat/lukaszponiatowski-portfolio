//Styles
import styled from "styled-components";
//Components
import { ContactForm, ContactInfo } from "@components";

const ContactSection = () => {
  return (
    <Wrapper>
      <ContactInfo />
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.mainBg};

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 50px;
  }

  @media screen and (max-width: 470px) {
    padding: 50px 20px;
  }
`;

export { ContactSection };
