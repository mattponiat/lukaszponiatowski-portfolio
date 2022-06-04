//Styled-components
import styled from "styled-components";

const DescContent = () => {
  return (
    <Wrapper>
      <StyledText>
        Nazywam się Łukasz Poniatowski, realizuje zlecenia fotograficzne na
        terenie całej Polski. Dokumentuje wasze uroczystości oraz ważne
        wydarzenia rodzinne. Prezentowana przeze mnie usługa charakteryzuje się
        indywidualnym podejściem do klienta, przed realizacja zależy mi na
        dokładnym zapoznaniu się z wizją i oczekiwaniami dotyczących
        okoliczności. Reportaż traktuje jako opowieść o niepowtarzalnej narracji
        i rytmie, emocjonującą historię która stanowi pamiątkę tych
        fantastycznych wydarzeń na całe życie.
      </StyledText>
      <StyledText>
        Wiem jak dużym jest to wyzwaniem oraz z jaką wiąże się
        odpowiedzialnością. Dlatego jako fotograf jestem ogromnie wdzięczny za
        zaufanie jakim darzą mnie moi klienci, zajmując się tym profesjonalnie
        obowiązkiem jest zapewnienie pierwszorzędnych efektów. Oferuje
        jutrzejsze spojrzenie na fotografie wraz z kreatywnym wykorzystaniem
        roli post produkcji. Nie podążam utartymi szlakami i zależy mi na
        przygotowaniu dla Państwa unikatowych historii. Serdecznie zapraszam do
        kontaktu gdzie przedstawię szczegóły oferty i odpowiem na każde pytanie.
      </StyledText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%/2, max(450px, 100%/3)), 1fr)
  );
  gap: 30px;
  max-width: 1350px;
  padding: 20px;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text.homeText};
  font-size: ${({ theme }) => theme.font.size.semiMedium};
  font-weight: 600;
  text-align: justify;
  line-height: 25.2px;
`;

export { DescContent };
