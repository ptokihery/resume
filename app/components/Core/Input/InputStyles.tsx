import styled, { css } from 'styled-components';

interface StyledInputProps {
  color: string;
  $wide?: boolean;
  $iconPlacement?: string;
  $size?: string;
}

export const InputWrapper = styled.div<{ $wide? : boolean, $size: string}>`
  position: relative;
  padding: 8px 0px 0px 0px;
  width : ${(props) => props.$size === "sm"? "50%": "100%"}
  
`;

export const Label = styled.label`
  position: absolute;
  padding: 0 4px;
  top: 2px;
  left: 10px;
  background-color: #fff;
  font-size: var(--size-text-sm);
  font-family: "Gilroy-Medium";
`;

export const InputBody = styled.input<StyledInputProps>`
  height: 48px;
  border-radius: 4px;
  border: 1px solid var(--color-gray-light);
  color: var(--color-gray);
  font-size: var(--size-text-medium);
  font-family: "Gilroy-Medium";
  padding: 8px 12px;
  
  ${(props) =>
    props.color &&
    css`
      color: var(--color-${props.color});
    `};
    width : ${(props) => props.$size === "sm"?  "98%": "100%"}
`;

export const Icon = styled.span<{ $iconPlacement?: string }>`
  position: absolute;
  ${(props) =>
    props.$iconPlacement === 'right'
      ? 'right: 5%;'
      : 'left: 5%;'} 
  top: 50%;
  transform: translateY(-32%);
  margin: auto;
`;

export const ErrorText = styled.p`
  color: var(--color-danger);
`;

