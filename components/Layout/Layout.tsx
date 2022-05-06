import Headroom from "react-headroom";
//Components
import { Header } from "components/Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  //onContextMenu={(e) => e.preventDefault()}
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      {children}
    </>
  );
};

export { Layout };
