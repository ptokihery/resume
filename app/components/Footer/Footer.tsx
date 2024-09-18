"use client"

import Link from "next/link";
import styled from "styled-components";

export type NavProps = {
  text: string;
  href: string;
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding: 20px 0px;
  gap: 32px;
  border-top: 1px solid var(--color-gray-light);
`;

const StyledLink = styled.span`
  color: var(--color-gray);
  text-decoration: none;
  font-size: 14px;
  line-height: 22px;
  font-family: "Gilroy-Medium"
`;

const navs: NavProps[] = [
  {
    text: "Terms & Conditions",
    href: "#",
  },
  {
    text: "Privacy Policy",
    href: "#",
  },
  {
    text: "FAQ",
    href: "#",
  },
  {
    text: "Contact Us",
    href: "#",
  },
];

export default function Footer() {
  return (
    <NavContainer>
      {navs.map((element: NavProps, index: number) => (
        <Link href={element.href} key={index}>
          <StyledLink>{element.text}</StyledLink>
        </Link>
      ))}
    </NavContainer>
  );
}

