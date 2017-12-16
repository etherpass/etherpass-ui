import styled from 'styled-components';
import {rem, borderRadius, borderWidth, shade} from 'polished';

const allSides = ['top', 'right', 'bottom', 'left'];

export const Button = styled.button`
  display: inline-block;
  background: #1fb6ff;
  ${allSides.map(s => borderRadius(s, '4px'))};
  ${borderWidth(0)};
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: ${rem(40)};
  padding: 0 ${rem(20)};
  min-width: ${rem(40)};
  white-space: nowrap;
  user-select: none;
  outline-style: none;
  text-decoration: none;
  text-align: center;
  text-rendering: optimizeLegibility;
  font-weight: 400;
  &:hover {
    box-shadow: inset 0 -2px 0 rgba(31, 45, 61, 0.15);
  }
`;

export const GhostButton = Button.extend`
  background: transparent;
  color: inherit;
  &:hover {
    color: #fff;
    background: #1fb6ff;
    box-shadow: inset 0 -2px 0 rgba(31, 45, 61, 0.15);
  }
`;

export const OutlinedButton = GhostButton.extend`
  background: #fff;
`;

export default Button;
