//Styled-components
import styled from "styled-components";
//Components
import InfoSection from "components-ui/home/organisms/InfoSection";
import ImgSection from "components-ui/home/organisms/ImgSection";
import DescSection from "components-ui/home/organisms/DescSection";
import ContactSection from "components-ui/home/organisms/ContactSection";

const HomePage = () => {
  return (
    <Wrapper>
      <InfoSection
        title="ŁUKASZ PONIATOWSKI"
        quote="“Fotograf z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję.”"
        about="Witaj, bardzo się cieszę, że tutaj jesteś. Korzystając z okazji pragnę zaprosić Cię do zapoznania się z moją osobą, a także portfolio stworzonym specjalnie z myślą o Tobie. Wykonuje fotoreportaże z uroczystości okolicznościowych, jednak to nie wszystko co posiadam w swojej ofercie."
      />
      <ImgSection />
      <DescSection
        desc1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        desc2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <ContactSection />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100vw;
`;

export default HomePage;
