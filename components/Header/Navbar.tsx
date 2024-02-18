//Components
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center max-w-[555px] w-full">
      <NavbarLink href="/o_mnie">O MNIE</NavbarLink>
      <NavbarLink href="/portfolio">PORTFOLIO</NavbarLink>
      <NavbarLink href="/kontakt">KONTAKT</NavbarLink>
    </nav>
  );
};

const NavbarLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <a
        className="py-4 text-header font-bold text-medium transition-colors hover:text-headerHover"
        href={href}
      >
        {children}
      </a>
    </Link>
  );
};

export { Navbar };
