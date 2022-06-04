//Styled-components
import styled from "styled-components";
//Components
import { SocialMediaIcon } from "./SocialMediaIcon";
//Icons
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const InfoSocialMedia = () => {
  return (
    <Wrapper>
      <SocialMediaIcon
        icon={<FiInstagram />}
        href="https://www.instagram.com/poniatowskipl/"
      />
      <SocialMediaIcon
        icon={<FaFacebook />}
        href="https://www.facebook.com/%C5%81ukasz-Poniatowski-Fotografia-105409568850494"
      />
      <SocialMediaIcon icon={<FaLinkedinIn />} href="https://linkedin.com/" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 140px;
  width: 40px;
  margin-top: 92px;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    min-height: auto;
    width: 145px;
    margin-top: 0;
  }

  @media screen and (max-width: 411px) {
    margin: 20px 0;
  }
`;

export { InfoSocialMedia };
