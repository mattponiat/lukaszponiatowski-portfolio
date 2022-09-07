import Link from "next/link";
//Styled-components
import styled from "styled-components";

const SocialMediaIcon = ({
  icon,
  href,
  title,
}: {
  icon: React.ReactElement;
  href: string;
  title: string;
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink target="_blank" title={title}>
        {icon}
      </StyledLink>
    </Link>
  );
};

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.mainBg};
  font-size: ${({ theme }) => theme.font.size.large};
  transition: color 0.3s ease, background-color 0.3s ease;

  :hover {
    color: ${({ theme }) => theme.colors.secondaryBg};
    background-color: ${({ theme }) => theme.colors.darkGreyHover};
  }
`;

export { SocialMediaIcon };
