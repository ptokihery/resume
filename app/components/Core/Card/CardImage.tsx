"use client"
import {
  ImageWrapper,
} from './CardStyles';

export type CardImageProps = {
  children: JSX.Element;
};
export default function CardImage({ children }: CardImageProps) {
  return <ImageWrapper>{children}</ImageWrapper>;
}
