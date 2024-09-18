import React, { useState } from "react";
import styled from "styled-components";
import Input from "@/app/components/Core/Input/Input";
import RoundedImage from "@/app/components/Core/Image/RoundedImage";
import Link from "next/link";
import { Button } from "@/app/components/Core/Button/Button";
import { FaCheckCircle } from "react-icons/fa";
const Container = styled.div`
  width: 100%;
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  width: 650px;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 481px) {
    justify-content: center;

  }

`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  @media (max-width: 481px) {
    margin: auto;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 2%;
  @media (max-width: 481px) {
    flex-wrap: wrap;
    width: 50%;
  }
`;
const AgreementContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Paragraph = styled.p`
  margin: 25px 0;
`;

const PersonalInformationForm = () => {
  const [formData, setFormData] = useState({
    first_name: "Petter",
    last_name: "Cetera",
    city: "London",
    postal_code: "E2 4XF",
    address: "123 Example",
    email: "petter@gmail.com",
    phone: "+442223334444",
    password: "password",
    agree: false,
  });

  const changeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <Container>
      <FormContainer>
        <Form>
          <InputGroup>
            <Input
              label="First Name"
              type="text"
              onChange={changeData}
              value={formData.first_name || ""}
              placeholder=""
              name="first_name"
              size="md"
              className={"form-input"}
            />
            <Input
              label="Last Name"
              onChange={changeData}
              type="text"
              value={formData.last_name || ""}
              placeholder=""
              name="last_name"
              size="md"
              className="form-input"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="City"
              onChange={changeData}
              type="text"
              value={formData.city || ""}
              placeholder=""
              name="city"
              size="md"
              className="form-input"
            />
            <Input
              label="Postal Code"
              onChange={changeData}
              type="text"
              value={formData.postal_code || ""}
              placeholder=""
              name="postal_code"
              size="md"
              className="form-input"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Address"
              type="text"
              onChange={changeData}
              value={formData.address || ""}
              placeholder=""
              name="address"
              size="md"
              wide={true}
              className="form-input"
            />
          </InputGroup>

          <InputGroup>
            <Input
              label="Email"
              type="email"
              onChange={changeData}
              value={formData.email || ""}
              placeholder=""
              name="email"
              size="md"
              className="form-input"
              icon={<FaCheckCircle size={"16px"} color={"#27CFB1"} />}
            />
            <Input
              label="Phone"
              type="text"
              onChange={changeData}
              value={formData.phone || ""}
              placeholder=""
              name="phone"
              size="md"
              className="form-input"
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Password"
              type="password"
              onChange={changeData}
              value={formData.password || ""}
              placeholder=""
              name="password"
              size="sm"
              className="form-input"
            />
          </InputGroup>
        </Form>
        <ProfileContainer>
          <RoundedImage
            src={"/img/profile-2.png"}
            alt="profile-2"
            width={144}
            height={144}
          />
        </ProfileContainer>
      </FormContainer>
      <Paragraph>
        Use this email to log in to your{" "}
        <Link href={"#"} className="link">
          resumedone.io
        </Link>{" "}
        account and receive notifications.
      </Paragraph>
      <Button size="md">{"Save"}</Button>
      <AgreementContainer>
        <input
          onChange={changeData}
          type="checkbox"
          name="agree"
          checked={formData.agree}
        />
        <Paragraph>
          Show my profile to serious employers on{" "}
          <Link href={"#"} className="link">
            hirethesbest.io
          </Link>{" "}
          for free
        </Paragraph>
      </AgreementContainer>
    </Container>
  );
};

export default PersonalInformationForm;
