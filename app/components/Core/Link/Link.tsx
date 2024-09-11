"use client"
import styled from 'styled-components';
import Link from 'next/link';

type IconLinkProps = {
  href: string;
  icon?: React.ReactElement;
  children: JSX.Element | string;
  $isTitle?: boolean;
};

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  text-decoration: none;
  color: inherit;
`;

const StyledText = styled.div<{ $isTitle?: boolean }>`
  margin-top: auto;
  margin-bottom: auto;
  ${(props) => (props.$isTitle ? 'font-weight: bold;' : '')}
`;

export default function IconLink({
  href,
  icon,
  children,
  $isTitle = false,
}: IconLinkProps) {
  return (
    <StyledLink href={href} passHref>
      {icon && icon}
      <StyledText $isTitle={$isTitle} className={$isTitle ? 'list-item-title' : 'list-item-text'}>
        {children}
      </StyledText>
    </StyledLink>
  );
}
