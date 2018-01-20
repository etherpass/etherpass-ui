import styled, {css} from 'styled-components';

const boxShadow = color =>
  css`
    box-shadow: inset 0 0 0 1px ${color};
  `;

const Input = styled.input`
  padding: 0 1rem;
  color: #3c4858;
  box-shadow: inset 0 0 0 1px #e0e6ed;
  border-width: 0;
  border-radius: 3px;
  background: #fff;
  outline-style: none;
  font-weight: 300;
  height: 40px;
  &:hover {
    ${boxShadow('#c0ccda')};
  }
  &:focus {
    ${boxShadow('#1fb6ff')};
  }
`;

export default Input;
