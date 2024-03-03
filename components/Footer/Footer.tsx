//Components
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-end justify-center min-h-[72px] max-h-[72px] max-w-full py-0 px-[30px] bg-mainBg">
      <span className="text-xsmall text-gray-400">
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

export { Footer };
