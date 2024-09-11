"use client"

import styled from "styled-components";
import StyledComponentsRegistry from "./lib/registry";
import classNames from "classnames";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import { GlobalStyle } from "./globalStyles";


const Html = styled.html`
  lang: en;
`;
const Main = styled.main`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
`;

const LayoutContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 32px 60px 0px 60px;
    width: 100%;
    max-width: 960px;

`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <Html>
          <body>
            <Main>
              <SideBar />
              <LayoutContainer>
                {children}
                <Footer />
              </LayoutContainer>
            </Main>
          </body>
        </Html>
      </StyledComponentsRegistry>

    </>
  );
}
