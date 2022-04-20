//Styled-components
import styled from "styled-components";

const Input = ({ ...props }) => {
  return (
    <StyledInput
      required
      autoComplete="on"
      minLength={5}
      maxLength={40}
      {...props}
    />
  );
};

const StyledInput = styled.input`
  max-width: 100%;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  border: none;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.text.homeHeading};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-family: ${({ theme }) => theme.font.family[700]};

  :focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.text.homeText};
  }
`;

export default Input;
