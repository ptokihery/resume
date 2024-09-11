import styled from "styled-components";
import RoundedImage from "../Core/Image/RoundedImage";
import { FaGear } from "react-icons/fa6";

const Footer = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-top: 1px solid var(--color-gray-light);
`;
const FooterLeft = styled.div`
  width: "32px";
  cursor: "pointer";
  display: flex;
  align-items: center;
  `;
const FooterRight = styled.div`
  cursor: "pointer";
  color: gray;
  width: 32px;
  height :32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Span = styled.span`
  font-size: 13px;
  margin-left: 10px;
  color: var(--color-gray);
  line-height: 20px;
`;
export default function SideBarFooter() {
  return (
    <Footer>
      <FooterLeft>
        <RoundedImage
          src={"/img/profile.png"}
          width={32}
          height={32}
          alt='profile'
        />
        <Span>Carla</Span>
      </FooterLeft>
      <FooterRight>
        <FaGear size={"16px"}/>
      </FooterRight>
    </Footer>
  );
}
