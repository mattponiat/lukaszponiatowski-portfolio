//Components
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center min-h-[150px] max-h-[150px] max-w-full py-0 px-[30px] bg-secondaryBg text-homeHeading">
      <div className="absolute w-full max-w-[450px] border-t border-t-lightGrey border-b border-b-mainBg sm small:max-w-[600px] smaller:max-w-[300px] smallest:max-w-[220px]" />
      <span className="text-xsmall text-[#787f85] mt-auto mb-8">
        Created by{" "}
        <Link href="https://www.mattponiat.com.pl/" passHref>
          <a
            href="https://www.mattponiat.com.pl/"
            target="_blank"
            rel="noreferrer"
            className="text-[#3694ff] transition-colors hover:text-[#3694ffa2]"
          >
            Mateusz Poniatowski
          </a>
        </Link>
      </span>
    </footer>
  );
};

export { Footer };
