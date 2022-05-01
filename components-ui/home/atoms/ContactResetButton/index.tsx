//Styled-components
import styled from "styled-components";

const ContactResetButton = styled.button`
  place-self: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.mainRed};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.xxsmall};
  font-weight: ${({ theme }) => theme.font.weight[700]};
  letter-spacing: 2px;
  cursor: pointer;
`;

export default ContactResetButton;
