//Styles
import styled from "styled-components";
//Components
import { SocialMediaIcon } from "@components";
//Icons
import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";

const InfoSocialMedia = () => {
  return (
    <Wrapper>
      <SocialMediaIcon
        icon={<FiInstagram />}
        href="https://www.instagram.com/lukaszponiatowski.pl/"
        title="Instagram icon"
      />
      <SocialMediaIcon
        icon={<FaFacebook />}
        href="https://www.facebook.com/%C5%81ukasz-Poniatowski-Fotografia-105409568850494"
        title="Facebook icon"
      />
      <SocialMediaIcon
        icon={<FaLinkedinIn />}
        href="https://www.linkedin.com/in/%C5%82ukasz-poniatowski-6a5bb4238/"
        title="LinkedIn icon"
      />
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
