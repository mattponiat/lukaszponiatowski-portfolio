import Link from "next/link";
//Styled-components
import styled from "styled-components";

const StyledIcon = ({
  icon,
  href,
}: {
  icon: React.ReactElement;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink target="_blank">{icon}</StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondaryBg};
  font-size: ${({ theme }) => theme.font.size.xlarge};
  transition: color 0.3s ease, background-color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export { StyledIcon };
