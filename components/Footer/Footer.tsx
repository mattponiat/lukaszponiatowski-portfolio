//Components
import Link from "next/link";
import { ReactElement } from "react";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex items-center min-h-[72px] max-h-[72px] max-w-full py-0 px-[30px] bg-mainBg z-50">
      <div className="flex gap-4">
        <SocialMediaIcon
          icon={<FiInstagram />}
          href="https://www.instagram.com/lukaszponiatowski.pl/"
        />
        <SocialMediaIcon
          icon={<FaFacebook />}
          href="https://www.facebook.com/%C5%81ukasz-Poniatowski-Fotografia-105409568850494"
        />
        <SocialMediaIcon
          icon={<FaLinkedinIn />}
          href="https://www.linkedin.com/in/%C5%82ukasz-poniatowski-6a5bb4238/"
        />
      </div>
      <span className="text-xsmall text-gray-400 ml-auto">
        Created by{" "}
        <Link href="https://www.mattponiat.com.pl/" passHref>
          <a
            href="https://www.mattponiat.com.pl/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-500"
          >
            Mateusz Poniatowski
          </a>
        </Link>
      </span>
    </footer>
  );
};

const SocialMediaIcon = ({
  icon,
  href,
}: {
  icon: ReactElement;
  href: string;
}) => {
  return (
    <Link href={href} passHref>
      <a
        target="_blank"
        rel="noreferrer"
        href={href}
        className="cursor-pointer flex items-center justify-center w-[35px] h-[35px] rounded-full bg-darkGrey text-mainBg text-large transition-colors hover:text-secondaryBg hover:bg-darkGreyHover"
      >
        {icon}
      </a>
    </Link>
  );
};

export { Footer };
