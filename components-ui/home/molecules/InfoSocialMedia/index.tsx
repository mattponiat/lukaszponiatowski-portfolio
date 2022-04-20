//Styled-components
import styled from "styled-components";
//Components
import SocialMediaIcon from "components-ui/home/atoms/SocialMediaIcon";
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
      <SocialMediaIcon icon={<FaFacebook />} href="https://www.facebook.com" />
      <SocialMediaIcon icon={<FaLinkedinIn />} href="https://linkedin.com/" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 40px;
  width: 100%;
  min-height: 140px;
  margin-top: 92px;
`;

export default InfoSocialMedia;
