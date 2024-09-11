"use client"
import styled from 'styled-components';
import classNames from 'classnames';
import {
  CardWrapper,
  ContentWrapper,
  ImageWrapper,
} from './CardStyles';

export type CardProps = {
  children: JSX.Element | JSX.Element[];
  image?: JSX.Element;
  color?: 'primary' | 'secondary' | 'white';
  imagePlacement?: 'left' | 'right';
};

const CustomCardWrapper = styled(CardWrapper)``;

export default function Card({
  children,
  color = 'primary',
  image,
  imagePlacement = 'left',
}: CardProps) {
  return (
    <CustomCardWrapper
      className={classNames({
      })}
      color={color}
    >
      <ContentWrapper>
        {imagePlacement === 'left' && image && (
          <ImageWrapper>{image}</ImageWrapper>
        )}
        {children}
        {imagePlacement === 'right' && image && (
          <ImageWrapper>{image}</ImageWrapper>
        )}
      </ContentWrapper>
    </CustomCardWrapper>
  );
}
