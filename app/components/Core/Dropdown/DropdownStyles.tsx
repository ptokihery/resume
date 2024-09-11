import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  width: 100%;
`;

interface MenuDropdownProps {
  $isOpen: boolean;
}

export const MenuDropdown = styled.div<MenuDropdownProps>`
  visibility: ${(props) => (props.$isOpen ? 'visible' : 'hidden')} !important;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};
  transition: visibility 0.3s linear, opacity 0.3s linear;
`;

export const Menu = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;

export const Icon = styled.span`
  cursor: pointer;
  display: flex;
  color: gray;
`;
