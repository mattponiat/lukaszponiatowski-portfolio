//Styled-components
import styled from "styled-components";
//Components
import { ContactSection } from "@components";
//Hooks
import { useWindowSize } from "usehooks-ts";

const ContactPage = () => {
  const { height } = useWindowSize();
  return (
    <Wrapper height={height}>
      <ContactSection />
    </Wrapper>
  );
};

const Wrapper = styled.main<{ height: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${({ height }) => height}px;
  max-width: 100%;

  @media screen and (max-width: 1024px) {
    min-height: 100vh;
  }
`;

export { ContactPage };
