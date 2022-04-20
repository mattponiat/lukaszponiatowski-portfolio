//Styled-components
import styled from "styled-components";
//Components
import ContactList from "components-ui/home/molecules/ContactList";
//Icons
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Wrapper>
      <ContactList icon={<FaEnvelope />} text="kontakt@lukaszponiatowski.pl" />
      <ContactList icon={<FaPhone />} text="+48 724241144" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 333px;
  width: 100%;
  margin-bottom: 50px;
`;

export default ContactInfo;
