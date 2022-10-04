//Styles
import styled from "styled-components";

const DescSection = () => {
  return (
    <Wrapper>
      <DescContent>
        <StyledText>
          Nazywam się Łukasz Poniatowski, realizuję zlecenia fotograficzne na
          terenie całej Polski. Dokumentuję Wasze uroczystości oraz ważne
          wydarzenia rodzinne. Prezentowana przeze mnie usługa charakteryzuje
          się indywidualnym podejściem do klienta. Przed realizacją zależy mi na
          dokładnym zapoznaniu się z wizją i oczekiwaniami dotyczącymi danej
          okoliczności. Reportaż traktuję jako opowieść o niepowtarzalnej
          narracji i rytmie, emocjonującą historię, która stanowi pamiątkę tych
          fantastycznych wydarzeń na całe życie.
        </StyledText>
        <StyledText>
          Wiem, jak dużym jest to wyzwaniem oraz z jaką wiąże się
          odpowiedzialnością. Dlatego jako fotograf jestem ogromnie wdzięczny za
          zaufanie jakim darzą mnie moi klienci. Zajmując się tym profesjonalnie
          moim obowiązkiem jest zapewnienie pierwszorzędnych efektów. Oferuję
          jutrzejsze spojrzenie na fotografię wraz z kreatywnym wykorzystaniem
          roli post produkcji. Nie podążam utartymi szlakami i zależy mi na
          przygotowaniu dla Państwa unikatowych historii. Serdecznie zapraszam
          do kontaktu, gdzie przedstawię szczegóły oferty i odpowiem na każde
          pytanie.
        </StyledText>
      </DescContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 370px;
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
`;

const DescContent = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%/2, max(450px, 100%/3)), 1fr)
  );
  gap: 20px;
  max-width: 1350px;
  padding: 20px;
`;

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.text.homeText};
  font-size: 16px;
  font-weight: 600;
  text-align: justify;
  line-height: 25.2px;
`;

export { DescSection };
