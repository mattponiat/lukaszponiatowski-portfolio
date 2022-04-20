//Styled-components
import styled from "styled-components";

const ContactIcon = ({ icon }: { icon: React.ReactElement }) => {
  return <Wrapper>{icon}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.mainBg};
  font-size: ${({ theme }) => theme.font.size.medium};
  transition: color 0.3s ease, background-color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.secondaryBg};
    background-color: ${({ theme }) => theme.colors.darkGreyHover};
  }
`;

export default ContactIcon;
