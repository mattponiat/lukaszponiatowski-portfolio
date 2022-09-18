//Styles
import styled from "styled-components";

const FormResetButton = styled.button`
  place-self: center;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.xxsmall};
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    color: ${({ theme }) => theme.colors.mainBg};
  }
`;

export { FormResetButton };
