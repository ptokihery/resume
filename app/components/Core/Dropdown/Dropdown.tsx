"use client"
import React, { FC, useState } from 'react';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import {
  DropdownWrapper,
  MenuDropdown,
  Menu,
  Icon,
} from './DropdownStyles';

export type DropdownProps = {
  title: JSX.Element | string;
  children: JSX.Element[] | JSX.Element;
};

const Dropdown: FC<DropdownProps> = ({ title, children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <DropdownWrapper>
      <Menu onClick={handleOpen}>
        {title}
        {open ? (
          <Icon>
            <FiMinusCircle size="1rem" color="text-gray" />
          </Icon>
        ) : (
          <Icon>
            <FiPlusCircle size="1rem" color="text-gray" />
          </Icon>
        )}
      </Menu>
      <MenuDropdown $isOpen={open}>
        {children}
      </MenuDropdown>
    </DropdownWrapper>
  );
};

export default Dropdown;
