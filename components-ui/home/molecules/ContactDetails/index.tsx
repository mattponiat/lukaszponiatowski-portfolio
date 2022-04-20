//Styled-components
import styled from "styled-components";
//Components
import ContactHeading from "components-ui/home/molecules/ContactHeading";
import ContactInfo from "components-ui/home/molecules/ContactInfo";

const ContactDetails = () => {
  return (
    <Wrapper>
      <ContactHeading />
      <ContactInfo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 488px;
  width: 100%;
  min-height: inherit;
  padding: 0 30px;
`;

export default ContactDetails;
