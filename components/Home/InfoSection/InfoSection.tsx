//Styles
import styled from "styled-components";
//Components
import { InfoContent, InfoSocialMedia } from "@components";
//Types
import { HomeInfoSectionProps } from "types";

const InfoSection = ({ titleSize, title, about }: HomeInfoSectionProps) => {
  return (
    <Wrapper>
      <InfoContent titleSize={titleSize} title={title} about={about} />
      <InfoSocialMedia />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 450px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export { InfoSection };
