//Styles
import clsx from "clsx";
import styled from "styled-components";

const Input = ({ ...props }) => {
  return (
    <StyledInputWrapper>
      <input
        autoComplete="on"
        {...props}
        className={clsx(
          "w-full p-2.5 mb-[5px] bg-mainBg border-solid border-b-2 border-b-secondaryBg rounded-[5px_5px_0px_0px] text-secondaryBg text-medium font-bold transition-shadow",
          "focus:outline-none focus:shadow-[0px_-10px_15px_-15px_rgb(70,70,70)_inset]",
          "focus-visible:outline-none focus-visible:shadow-[0px_-10px_15px_-15px_rgb(70,70,70)_inset]"
        )}
      />
    </StyledInputWrapper>
  );
};

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
