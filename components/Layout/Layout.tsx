import Headroom from "react-headroom";
//Components
import { Header, Footer } from "@components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      {children}
      <Footer />
    </>
  );
};

export { Layout };
