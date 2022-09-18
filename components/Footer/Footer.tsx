import Link from "next/link";
//Styles
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <StyledDivider />
      <StyledSpan>
        Created by{" "}
        <Link href="https://www.mattponiat.pl/" passHref>
          <StyledA target="_blank">Mateusz Poniatowski</StyledA>
        </Link>
      </StyledSpan>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 170px;
  max-height: 170px;
  max-width: 100%;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  color: ${({ theme }) => theme.colors.text.homeHeading};
`;

const StyledDivider = styled.div`
  position: absolute;
  width: 100%;
  max-width: 600px;
  border-top: 0.5px groove ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 0.5px groove ${({ theme }) => theme.colors.mainBg};

  @media screen and (max-width: 630px) {
    max-width: 450px;
  }

  @media screen and (max-width: 486px) {
    max-width: 300px;
  }

  @media screen and (max-width: 330px) {
    max-width: 220px;
  }
`;

const StyledSpan = styled.span`
  font-size: ${({ theme }) => theme.font.size.xsmall};
  color: #787f85;
  margin: auto 0 32px;
  letter-spacing: 0.4px;
`;

const StyledA = styled.a`
  color: #3694ff;
  text-decoration: none;
  transition: 0.2s color;

  :hover {
    color: #3694ffa2;
  }
`;

export { Footer };
