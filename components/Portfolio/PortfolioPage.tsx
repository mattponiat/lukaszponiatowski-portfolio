//Styled-components
import styled from "styled-components";
//Components
import { InfoSection, ImgGallerySection } from "@components";

const PortfolioPage = () => {
  return (
    <Wrapper>
      <InfoSection
        titleSize={80}
        title="PORTFOLIO"
        about="Podczas reportażu działam dyskretnie, niepostrzeżenie utrwalę wydarzenia nawet z samego środka akcji. Poluje na decydujące momenty, szczegóły pomijane oraz często niedoceniane, które w dużej mierze wpływają na finalny odbiór okoliczności. Tworząc dla was album, zależy mi na wszechstronnym oddaniu zastanego klimatu, na przedstawieniu waszych historii emocjami."
      />
      <ImgGallerySection />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  max-width: 100%;
`;

export { PortfolioPage };
