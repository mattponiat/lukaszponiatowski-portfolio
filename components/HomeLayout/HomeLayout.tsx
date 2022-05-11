import Headroom from "react-headroom";
//Components
import { Header } from "@components";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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

export { HomeLayout };
