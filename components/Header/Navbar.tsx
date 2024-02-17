//Components
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center max-w-[555px] w-full">
      <StyledLink href="/home">HOME</StyledLink>
      <StyledLink href="/portfolio">PORTFOLIO</StyledLink>
      <StyledLink href="/kontakt">KONTAKT</StyledLink>
    </nav>
  );
};

const StyledLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <a
        className="py-6 text-header font-extrabold text-semiMedium transition-colors hover:text-headerHover"
        href={href}
      >
        {children}
      </a>
    </Link>
  );
};

export { Navbar };
