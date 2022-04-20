import Headroom from "react-headroom";
//Components
import Header from "components-ui/header/organisms/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
      {children}
    </>
  );
};

export default Layout;
