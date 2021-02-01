import { theme } from '@/lib/styled-components/theme';
import { ButtonHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';

type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type StyledButtonProps = {
  colorScheme?: 'normal' | 'primary' | 'secondary';
  fullWidth?: boolean;
  variant?: 'outlined' | 'contained';
  size?: 'sm' | 'md' | 'lg';
};

export type ButtonProps = StyledButtonProps &
  Omit<HTMLButtonProps, keyof StyledButtonProps>;

const getButtonColors = (colorScheme: string) => {
  if (colorScheme === 'primary' || colorScheme === 'secondary') {
    const { default: defaultColor, hover, active } = theme.buttonColors[
      colorScheme
    ];
    return { default: defaultColor, hover, active };
  } else {
    return { default: theme.buttonColors.normal.default };
  }
};

const getPaddingX = (size: StyledButtonProps['size'] = 'md') => {
  switch (size) {
    case 'sm': {
      return '0.75rem';
    }
    case 'md': {
      return '2.5rem';
    }
    case 'lg': {
      return '5.5rem';
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = size;
      throw new Error('invalid Button size');
    }
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 2rem;
  vertical-align: middle;
  font-family: inherit;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  white-space: nowrap;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  padding: ${({ size }) => `0.75rem ${getPaddingX(size)}`};
  ${(props) => {
    const { colorScheme = 'normal', variant, theme } = props;
    const colors = getButtonColors(colorScheme);
    if (colorScheme === 'normal') {
      return css`
        color: ${theme.buttonColors.normal.default};
        background-color: ${theme.colors.white};
        font-weight: normal;
        border: 1px solid ${theme.colors.lightGray[3]};
      `;
    }
    if (variant === 'outlined') {
      return css`
        color: ${colors.default};
        background-color: white;
        border-color: ${colors.default};
        &:hover {
          color: ${colors.hover || colors.default};
          border-color: ${colors.hover || colors.default};
        }
        &:active {
          color: ${colors.active || colors.active};
          border-color: ${colors.active || colors.active};
        }
      `;
    } else {
      return css`
        color: white;
        background-color: ${colors.default};
        border: none;
        &:hover {
          background-color: ${colors.hover || colors.default};
        }
        &:active {
          background-color: ${colors.active || colors.active};
        }
      `;
    }
  }};
`;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
