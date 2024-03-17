//Icons
import { IoMdMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div className="flex flex-col self-center max-w-[600px] w-full contactMedium:self-start my-auto">
      <h1 className="m-0 text-secondaryBg text-xxxlarge leading-[40px] font-light hidden contactMedium:inline tracking-wide">
        SKONTAKTUJ SIĘ
      </h1>
      <span className="mb-4 text-secondaryBg text-xxlarge font-extrabold hidden contactMedium:inline tracking-wide">
        ze mną
      </span>
      <p className="m-0 mb-[25px] text-secondaryBg text-large text-justify contactMedium:text-left contactMedium:text-xlarge contactMedium:mb-5">
        Wypełnił poniższy formularz i zapytaj o termin oraz warunki współpracy.
        <br />
        Sprawdź przygotowaną dla Ciebie ofertę.
      </p>
      <ListElement icon={<AiFillPhone />} text="+48 724 241 144" />
      <ListElement icon={<IoMdMail />} text="lukaszponiatowskipl@gmail.com" />
    </div>
  );
};

const ListElement = ({
  icon,
  text,
}: {
  icon: React.ReactElement;
  text: string;
}) => {
  return (
    <div className="flex items-center justify-start max-w-full mb-2.5 break-all whitespace-pre-wrap">
      <div className="static flex items-center justify-center flex-shrink-0 w-[30px] h-[30px] mr-2.5 rounded-full bg-transparent text-secondaryBg text-large transition-colors">
        {icon}
      </div>
      <span className="text-secondaryBg text-medium font-semibold">{text}</span>
    </div>
  );
};

export { ContactInfo };
