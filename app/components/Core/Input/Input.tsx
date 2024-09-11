import React, { ChangeEvent, FC } from 'react';
import classNames from 'classnames';
import { InputWrapper, Label, InputBody, Icon, ErrorText} from './InputStyles';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'password';
  label: string;
  value: string | number;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  name: string;
  placeholder?: string;
  size: 'md' | 'lg' | 'sm';
  error?: string;
  disabled?: boolean;
  wide?: boolean;
  icon?: React.ReactElement;
  $iconPlacement?: 'right' | 'left';
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string
}

const Input: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  size,
  placeholder,
  $iconPlacement = 'right',
  error,
  color = 'gray',
  disabled,
  wide,
  icon,
  onChange,
  className,
}) => {
  return (
    <InputWrapper $wide={wide} $size={size}>
      <Label htmlFor={label}>{label}</Label>
      <InputBody
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        color={color}
        $wide={wide}
        className={className}
        $size={size}
      />
      <Icon $iconPlacement={$iconPlacement} className={classNames({ visible: icon, hidden: !icon })}>
        {icon && icon}
      </Icon>
      {error && <ErrorText className="error">{error}</ErrorText>}
    </InputWrapper>
  );
};

export default Input;
