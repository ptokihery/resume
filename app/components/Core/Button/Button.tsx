import styled, { css } from 'styled-components';
import { ChangeEvent, FC } from 'react';

interface StyledButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  size: 'md' | 'lg' | 'sm' | 'wide';
}

export const StyledButton = styled.button<StyledButtonProps>`
  border-radius: 4px;
  border: 1px solid;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      color: #fff;
      background-color: var(--color-${props.color});
      font-size: var(--size-text-medium);
      font-family: "Gilroy-Medium" !important;
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      width: 170px;
      height: 40px;
    `}
  ${(props) => props.size === 'wide' &&
    css`
      width: 100% !important;
    `}
`;

export interface ButtonProps extends StyledButtonProps {
  disabled?: boolean;
  icon?: React.ReactElement;
  iconPlacement?: 'right' | 'left';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactElement | string;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'md',
  color = 'primary',
}: ButtonProps) => {
  return (
    <StyledButton size={size} color={color}>
      {children}
    </StyledButton>
  );
};
