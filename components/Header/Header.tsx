import * as React from "react";
//Components
import { Navbar } from "@components";
import Link from "next/link";
import Image from "next/image";
//Hooks
import { useWindowSize } from "usehooks-ts";
//MUI
import Dialog from "@mui/material/Dialog";
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
    <header className="max-w-full min-h-[70px] max-h-[70px] bg-mainBg shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
      {isLoading === false && (
        <div className="flex sticky items-center justify-end md:justify-center max-w-full min-h-[70px] bg-mainbg shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
          {width <= 768 ? (
            <>
              <div className="flex items-center justify-between w-full max-h-[70px] pl-3">
                <Link href="/home" passHref>
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="cursor-pointer h-[35px]"
                  />
                </Link>
                <button onClick={handleOpen} className="px-2">
                  <HamburgerIcon />
                </button>
              </div>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <div className="flex flex-col justify-start max-w-full min-h-full px-2.5 bg-secondaryBg opacity-[0.99]">
                  <IconButton
                    size="medium"
                    onClick={handleClose}
                    aria-label="close"
                    style={{
                      alignSelf: "end",
                      margin: "10px 0",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <nav className="flex flex-col justify-center items-center mt-auto mx-0 mb-[290px]">
                    <HeaderLink handleClose={handleClose} href="o-mnie">
                      O MNIE
                    </HeaderLink>
                    <HeaderLink handleClose={handleClose} href="/portfolio">
                      PORTFOLIO
                    </HeaderLink>
                    <HeaderLink handleClose={handleClose} href="/kontakt">
                      KONTAKT
                    </HeaderLink>
                  </nav>
                </div>
              </Dialog>
            </>
          ) : (
            <div className="flex min-h-[70px] max-h-[70px] w-full justify-between items-center pl-12">
              <Link href="/home" passHref>
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="cursor-pointer h-[35px]"
                />
              </Link>
              <Navbar />
            </div>
          )}
        </div>
      )}
    </header>
  );
};

const HamburgerIcon = () => {
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

const CloseIcon = () => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 15 15"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const HeaderLink = ({
  href,
  children,
  handleClose,
}: {
  href: string;
  children: React.ReactNode;
  handleClose: () => void;
}) => {
  return (
    <Link href={href} passHref>
      <a
        href={href}
        onClick={handleClose}
        className="my-[15px] mx-0 text-xlarge text-mainBg transition-colors hover:text-lightGrey"
      >
        {children}
      </a>
    </Link>
  );
};

export { Header };
