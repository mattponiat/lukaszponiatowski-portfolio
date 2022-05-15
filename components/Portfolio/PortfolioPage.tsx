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
        about="Podczas reportażu działam dyskretnie i niepostrzeżenie, szukam szczegółów często niedocenianych lub pomijanych a w dużej mierze wpływających na finalny odbiór okoliczności. Pracuję nad własnym oryginalnym stylem wykorzystując rozmaitą paletę barw oraz coraz nowsze technologie z branży. Tworząc dla was album zależy mi na wszechstronnym oddaniu zastanego klimatu, na przedstawieniu waszych historii emocjami."
      />
      <ImgGallerySection />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  min-height: 100vh;
  max-width: 100vw;
`;

export { PortfolioPage };
