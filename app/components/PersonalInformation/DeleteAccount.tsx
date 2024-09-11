import styled from 'styled-components';
import Link from "next/link";
import { CardWrapper, Title, TextMedium, TextDanger, CardContentWrapper } from '@/app/components/Core/Card/CardStyles';


const CardTitles = styled(Title)`
  color: var(--color-dark);
`; 
const CardContent = styled(CardContentWrapper)`
  flex-direction: column;
  padding: 0px;
`;

const Card = styled(CardWrapper)`
`;

export default function DeleteAccount() {
  return (
    <div style={{ margin: "20px 0px" }}>
      <Card color='white'>
        <CardContent>
          <CardTitles>Delete account</CardTitles>
          <TextMedium>
            If you delete your account you’ll be permanently removing it from
            our systems - you can’t undo it.
          </TextMedium>
          <Link href={"#"} passHref>
            <TextDanger className='text-danger text-medium text-bold'>
              Yes, Delete my account
            </TextDanger>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

