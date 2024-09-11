"use client"

import styled from "styled-components";
import PersonalInformation from "./components/PersonalInformation";
import RoundedImage from "./components/Core/Image/RoundedImage";

import {
  CardWrapper,
  ContentWrapper,
  Title,
  ImageWrapper,
} from './components/Core/Card/CardStyles';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 36px;
`;
const CardWrapperResponsive = styled(CardWrapper)`
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <CardContainer>
      <CardWrapperResponsive color='secondary'>
        <ImageWrapper>
          <RoundedImage
            src='/img/career.png'
            alt={"Career"}
            width={72}
            height={72}
            contain={true}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title>Premium Account</Title>
          <p>
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privilege, you
            can indulge in the freedom of downloading an unlimited number of
            resumes and cover letters in both PDF and Word formats.
          </p>
        </ContentWrapper>
      </CardWrapperResponsive>
      <PersonalInformation />
    </CardContainer>
  );
}
