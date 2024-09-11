"use client"
import styled, { css } from 'styled-components';
import Image from 'next/image';
import classNames from 'classnames';

export type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  contain?: boolean;
};
const Circle = styled.div`
  border-radius: 50%;
  overflow: hidden;
  padding: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Wrapper = styled.div`
  ${Circle}
  position: relative;
  object-fit: contain;
`;



export default function RoundedImage({ src, alt, width, height }: ImageProps) {
  return (
    <Wrapper>
      <Image src={src} alt={alt} width={width} height={height} />
    </Wrapper>
  );
}
