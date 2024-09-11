"use client"

import styled from "styled-components";
import DeleteAccount from "./DeleteAccount";
import FeedBack from "./FeedBack";
import PersonalInformationForm  from "./Form/Form";
import { Title } from '@/app/components/Core/Card/CardStyles';
const InfoPerso = styled.div`
  width: 100%;
`;
const InfoTitle = styled(Title)`
  margin-bottom: 16px;
`;
export default function PersonalInformation() {
  return (
    <InfoPerso>
      <InfoTitle>Personal Information</InfoTitle>
      <PersonalInformationForm />
      <DeleteAccount />
      <FeedBack />
    </InfoPerso>
  );
}
