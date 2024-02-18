//Styles
import clsx from "clsx";
//Components
import { ContactForm, ContactInfo } from "@components";
//Hooks
import { useWindowSize } from "usehooks-ts";

const ContactPage = () => {
  const { height } = useWindowSize();

  return (
    <main
      className={clsx(
        `flex items-center justify-center max-w-full min-h-screen lg:min-h-[${height}px]`
      )}
    >
      <section
        className={clsx(
          "flex items-center justify-center gap-[50px] flex-col-reverse w-full p-5 bg-mainBg",
          "contactSmall:py-[50px] contactSmall:px-5",
          "contactMedium:gap-5 contactMedium:flex-row"
        )}
      >
        <ContactInfo />
        <ContactForm />
      </section>
    </main>
  );
};

export { ContactPage };
