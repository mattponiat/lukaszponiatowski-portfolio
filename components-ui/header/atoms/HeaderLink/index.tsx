import Link from "next/link";
//Styled-components
import styled from "styled-components";

const HeaderLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.text.header};
  font-family: ${({ theme }) => theme.font.family[800]};
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  letter-spacing: 0.6px;
  text-decoration: none;
  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.text.headerHover};
  }
`;

export default HeaderLink;
