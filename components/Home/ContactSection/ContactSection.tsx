//Styled-components
import styled from "styled-components";
//Components
import { ContactDetails } from "./ContactDetails";
import { ContactForm } from "./ContactForm";

const ContactSection = () => {
  return (
    <Wrapper>
      <ContactDetails />
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 60vh;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

export { ContactSection };
