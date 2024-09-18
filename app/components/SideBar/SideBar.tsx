"use client"
import styled from "styled-components";
import Image from "next/image";
import SideBarFooter from "./SideBarFooter";
import IconLink from "../Core/Link/Link";
import { MdListAlt } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { TbClockHour3 } from "react-icons/tb";
import Dropdown from "../Core/Dropdown/Dropdown";

const Wrapper = styled.div`
  width: 240px;
  background-color: white;
  border-right: 1px solid;
  border-color: var(--color-gray-light);
  padding: 5px 8px;
  display: flex;
  max-height: 1080px;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    display: none;
    position: absolute;
    z-index: 50;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  margin-bottom: 10px;
  position: relative;
  padding: 12px 0px;
  border-bottom: 1px solid var(--color-gray-light);
`;

const StyledImage = styled(Image)`
  width: 114px;
  height: 24px;
`;

const MainIconLink = styled(IconLink)`
  margin-top: 10px;
`;

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;  
  & a div {
    font-family: "Gilroy-Medium" !important;
  }
`;

const StyledIconLink = styled(IconLink)`
  margin-top: 5px;
`;

const StyledDropdown = styled(Dropdown)`
  margin-top: 10px;
  
`;

const StarsIcon = styled.img.attrs({
  src: "/img/stars.png",
  alt: "stars",
  width: 14,
  height: 14,
})``;

const DirIcon = styled.img.attrs({
  src: "/img/dir.png",
  alt: "Dir",
  width: 14,
  height: 14,
})``;

const LockIcon = styled.img.attrs({
  src: "/img/lock.jpg",
  alt: "Lock",
  width: 14,
  height: 14,
})``;

export type sideBarListNavType = {
  text: string;
  href: string;
  icon: React.ReactElement;
};

const ListOne: sideBarListNavType[] = [
  {
    text: "Software Engineer",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Computer hardware engineer",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Network Engineer",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Technical Support",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Network administrator",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Management",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Data analysis",
    href: "#",
    icon: <StarsIcon />,
  },
  {
    text: "Computer technician",
    href: "#",
    icon: <StarsIcon />,
  },
];

const ListTwo: sideBarListNavType[] = [
  {
    text: "Past search 1",
    href: "#",
    icon: <TbClockHour3 size={"1rem"} className={"icon-side"} />,
  },
  {
    text: "Past search 2",
    href: "#",
    icon: <TbClockHour3 size={"1rem"} className={"icon-side"} />,
  },
  {
    text: "Computers and information...",
    href: "#",
    icon: <TbClockHour3 size={"1rem"} className={"icon-side"} />,
  },
  {
    text: "Database Administrator",
    href: "#",
    icon: <TbClockHour3 size={"1rem"} className={"icon-side"} />,
  },
  {
    text: "Computer security",
    href: "#",
    icon: <TbClockHour3 size={"1rem"} className={"icon-side"} />,
  },
  {
    text: "Computer Systems Analyst",
    href: "#",
    icon: <TbClockHour3 size={"1rem"} className={"icon-side"} />,
  },
];

const dropdownList: sideBarListNavType[] = [
  {
    text: "Board 1",
    href: "#",
    icon: <DirIcon className={"icon-side"}/>,
  },
  {
    text: "Board 2",
    href: "#",
    icon: <DirIcon className={"icon-side"}/>,
  },
  {
    text: "Board 2",
    href: "#",
    icon: <DirIcon className={"icon-side"}/>,
  },
  {
    text: "Board agent 1",
    href: "#",
    icon: <LockIcon className={"icon-side"}/>,
  },
  {
    text: "Board agent 2",
    href: "#",
    icon: <LockIcon className={"icon-side"}/>,
  },
  {
    text: "Board agent 3",
    href: "#",
    icon: <LockIcon className={"icon-side"}/>,
  },
];

export default function SideBar() {
  return (
    <Wrapper>
      <Content>
        <Logo>
          <StyledImage src='/img/resumizeme-logo.png' alt='Resumizemo Logo' width={114} height={24}/>
        </Logo>

        <MainIconLink href="#" icon={<MdListAlt size={"1rem"} className={"icon-side"} />} $isTitle={true}>
          My templates
        </MainIconLink>

        <MainIconLink href="#" icon={<BsSearch size={"1rem"} className={"icon-side"} />} $isTitle={true}>
          Search
        </MainIconLink>

        <ListsContainer>
          {ListOne.map((speciality: any, index: number) => (
            <StyledIconLink key={index} href={speciality.href} icon={speciality?.icon}>
              {speciality?.text}
            </StyledIconLink>
          ))}
        </ListsContainer>

        <ListsContainer>
          {ListTwo.map((speciality: any, index: number) => (
            <StyledIconLink key={index} href={speciality.href} icon={speciality?.icon}>
              {speciality?.text}
            </StyledIconLink>
          ))}
        </ListsContainer>

        <StyledDropdown
          title={
            <MainIconLink
              href="#"
              icon={
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M1.04063 1.59693C1.01399 1.72713 1 1.86193 1 2V14C1 15.1046 1.89543 16 3 16H13C14.1046 16 15 15.1046 15 14V2C15 0.895431 14.1046 0 13 0H3C2.0335 0 1.22713 0.685564 1.04063 1.59693ZM3 2H13V7H3V2ZM3 9V14H13V9H3ZM6 5H10V4H6V5ZM10 12H6V11H10V12Z'
                    fill='#4C4C55'
                  />
                </svg>
              }
              $isTitle={true}
            >
              My boards
            </MainIconLink>
          }
        >
          {dropdownList.map((speciality: any, index: number) => (
            <StyledIconLink key={index} href={speciality.href} icon={speciality?.icon}>
              {speciality?.text}
            </StyledIconLink>
          ))}
        </StyledDropdown>
      </Content>
      <SideBarFooter />
    </Wrapper>
  );
}
