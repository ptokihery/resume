import styled from "styled-components";
import Link from "next/link";
const Paragraph = styled.p`
  line-height: 22px;
  
  font-size: var(--size-text-medium);
  font-family: "Gilroy-Medium" !important;
  color: var(--color-gray);
`;

export default function FeedBack() {
  return (
    <div style={{marginTop: "20px"}}>
      <Paragraph>
        <Link href={"#"} className={"link"}>
          Get in touch with our support team
        </Link>{" "}
        if you have any question or want to leave some feedback.
      </Paragraph>
      <Paragraph>We’ll be happy to hear from you.</Paragraph>
    </div>
  );
}
