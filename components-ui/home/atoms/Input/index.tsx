//Styled-components
import styled from "styled-components";

const Input = ({ ...props }) => {
  return (
    <StyledInput autoComplete="on" minLength={5} maxLength={40} {...props} />
  );
};

const StyledInput = styled.input`
  max-width: 100%;
  width: 100%;
  padding: 10px;
  margin-bottom: 2px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  box-shadow: 0 0 10px hsl(0, 0%, 0%);
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight[700]};

  :focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.text.homeText};
  }
`;

export default Input;
