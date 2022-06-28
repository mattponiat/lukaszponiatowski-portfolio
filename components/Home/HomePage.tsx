//Styled-components
import styled from "styled-components";
//Components
import { InfoSection, DescSection, ImgCarouselSection } from "@components";

const HomePage = () => {
  return (
    <Wrapper>
      <InfoSection
        titleSize={52}
        title="ŁUKASZ PONIATOWSKI"
        quote="“Fotograf z wrażliwym podejściem do barw, oprawi wasze emocje w niebanalną kompozycję.”"
        about="Witaj, bardzo się cieszę, że tutaj jesteś. Korzystając z okazji pragnę zaprosić Cię do zapoznania się z moją osobą, a także portfolio stworzonym specjalnie z myślą o Tobie. Wykonuje fotoreportaże z uroczystości okolicznościowych, jednak to nie wszystko co posiadam w swojej ofercie."
      />
      <ImgCarouselSection />
      <DescSection />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  max-width: 100%;
`;

export { HomePage };
