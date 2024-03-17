const AboutMePage = () => {
  return (
    <main className="h-[calc(100vh-68px)] max-w-full">
      <div className="flex items-center justify-center gap-10 h-[calc(100vh-68px)]">
        <img
          src="https://s3.eu-west-3.amazonaws.com/data.lukaszponiatowski.pl/AboutMe/aboutMe.jpg"
          alt="about me"
          className="w-[495px] h-[635px]"
        />
        <div className="flex flex-col gap-4 max-w-[590px] mb-[100px]">
          <span className="text-xxlarge text-[#999999]">FOTOGRAF KALISZ</span>
          <span className="text-[#999999] text-[18px] leading-[24px] descriptionStroke">
            Nazywam się Łukasz Poniatowski, realizuję zlecenia fotograficzne na
            terenie całej Polski. Dokumentuję Wasze uroczystości oraz ważne
            wydarzenia rodzinne. Reportaż traktuję jako opowieść o
            niepowtarzalnej narracji i rytmie, emocjonującą historię, która
            stanowi pamiątkę tych fantastycznych wydarzeń na całe życie. Wiem,
            jak dużym jest to wyzwaniem oraz z jaką wiąże się
            odpowiedzialnością. Dlatego jako fotograf jestem ogromnie wdzięczny
            za zaufanie jakim darzą mnie moi klienci. Oferuję jutrzejsze
            spojrzenie na fotografię wraz z kreatywnym wykorzystaniem roli post
            produkcji. Nie podążam utartymi szlakami i zależy mi na
            przygotowaniu dla Państwa unikatowych historii. Serdecznie zapraszam
            do kontaktu, gdzie przedstawię szczegóły oferty i odpowiem na każde
            pytanie.
          </span>
        </div>
      </div>
    </main>
  );
};

export { AboutMePage };
