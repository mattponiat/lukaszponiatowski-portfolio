//Styles
import clsx from "clsx";
//Components
import { ContactForm, ContactInfo } from "@components";

const ContactPage = () => {
  return (
    <main
      className={clsx(
        `flex items-center justify-center max-w-full lg:h-[calc(100vh-68px)]`
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
