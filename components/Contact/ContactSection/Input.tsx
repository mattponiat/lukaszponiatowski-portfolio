//Styles
import styled from "styled-components";

const Input = ({ ...props }) => {
  return (
    <StyledInputWrapper>
      <StyledInput autoComplete="on" {...props} />
    </StyledInputWrapper>
  );
};

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 5px 5px 0 0;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: 700;
  transition: box-shadow 0.3s;

  :focus-visible,
  :focus {
    outline: none;
    box-shadow: rgb(70, 70, 70) 0px -10px 15px -15px inset;
  }
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 2px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }

  ::after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 0;
    width: 2px;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.secondaryBg};
  }
`;

export { Input };
