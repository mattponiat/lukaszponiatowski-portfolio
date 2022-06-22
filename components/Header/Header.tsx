import * as React from "react";
//Styled-components
import styled from "styled-components";
//Components
import { Navbar } from "./Navbar";
//Hooks
import { useWindowSize } from "usehooks-ts";
//MUI
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Fade ref={ref} {...props} />;
});

const Header = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const { width } = useWindowSize();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setIsLoading(false);
  });

  return (
    <EmptyWrapper>
      {isLoading === false && (
        <Wrapper>
          {width <= 768 ? (
            <>
              <StyledButton onClick={handleOpen}>
                <StyledHamburgerIcon />
              </StyledButton>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <StyledDialogContent>
                  <IconButton
                    size="medium"
                    onClick={handleClose}
                    aria-label="close"
                    style={{
                      alignSelf: "end",
                      margin: "10px 0",
                    }}
                  >
                    <StyledCloseIcon fontSize="large" color="inherit" />
                  </IconButton>
                  <StyledNavWrapper>
                    <StyledLink onClick={handleClose} href="/">
                      HOME
                    </StyledLink>
                    <StyledLink onClick={handleClose} href="/portfolio">
                      PORTFOLIO
                    </StyledLink>
                    <StyledLink onClick={handleClose} href="/kontakt">
                      KONTAKT
                    </StyledLink>
                  </StyledNavWrapper>
                </StyledDialogContent>
              </Dialog>
            </>
          ) : (
            <Navbar />
          )}
        </Wrapper>
      )}
    </EmptyWrapper>
  );
};

const StyledHamburgerIcon = () => {
  return (
    <svg viewBox="0 0 10 8" width="37">
      <path
        d="M1 1h8M1 4h 8M1 7h8"
        stroke="#333333"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    justify-content: end;
  }
`;

const EmptyWrapper = styled.header`
  max-width: 100%;
  min-height: 70px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  display: grid;
  place-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: ${({ theme }) => theme.colors.mainBg};
`;

const StyledDialogContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 100%;
  min-height: 100%;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  opacity: 0.99;
`;

const StyledNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const StyledLink = styled.a`
  margin: 15px 0;
  font-size: ${({ theme }) => theme.font.size.xlarge};
  color: ${({ theme }) => theme.colors.mainBg};
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.3s;

  :hover {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export { Header };
