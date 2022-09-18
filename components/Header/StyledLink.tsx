import Link from "next/link";
//Styles
import styled from "styled-components";

const StyledLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledA>{children}</StyledA>
    </Link>
  );
};

const StyledA = styled.a`
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.text.header};
  font-weight: 800;
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  letter-spacing: 0.6px;
  text-decoration: none;
  transition: color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.text.headerHover};
  }
`;

export { StyledLink };
