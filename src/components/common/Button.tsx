import * as React from 'react';
import styled, { css } from 'styled-components';
import { buttonColorMap } from '../../lib/styles/palette';

type ButtonSize = 'SMALL' | 'DEFAULT' | 'LARGE' | 'FULL';
type ColorType = 'teal' | 'gray' | 'darkGray' | 'lightGray' | 'orange';

type ButtonBlockProps = {
  inline?: boolean;
  color: string;
  size: ButtonSize;
  border: boolean;
};

const ButtonBlock = styled.button<ButtonBlockProps>`
  align-items: center;
  text-align: center;
  height: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  background: ${props => buttonColorMap[props.color].background};
  color: ${props => buttonColorMap[props.color].color};
  &:hover,
  &:focus {
    background: ${props => buttonColorMap[props.color].hoverBackground};
  }
  border-radius: 4px;
  padding-top: 0;
  padding-bottom: 0;
  ${props =>
    props.inline &&
    css`
      border-radius: 0;
    `}
  ${props =>
    props.size === 'SMALL' &&
    css`
      height: 1.5rem;
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      font-size: 0.875rem;
    `};
  ${props =>
    props.size === 'DEFAULT' &&
    css`
      height: 2rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1rem;
    `};
  ${props =>
    props.size === 'LARGE' &&
    css`
      height: 3rem;
      font-size: 1.5rem;
      padding-left: 2rem;
      padding-right: 2rem;
    `}
  ${props =>
    props.size === 'FULL' &&
    css`
      width: 100%;
      text-align: center;
      height: 3rem;
      font-size: 0.875rem;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
    `}
`;

interface ButtonProps {
  color?: ColorType;
  inline?: boolean;
  size: ButtonSize;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = 'orange',
  size = 'DEFAULT',
  inline,
  onClick,
  ...rest
}) => {
  const htmlProps = rest as any;
  return (
    <ButtonBlock
      color={color}
      size={size}
      inline={inline}
      {...htmlProps}
      onClick={onClick}
    >
      {children}
    </ButtonBlock>
  );
};

export default Button;
