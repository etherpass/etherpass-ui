import styled from 'styled-components';
import {darken, transitions} from 'polished';

const mapPropsToColor = props => {
  if (props.dark) return '#3c4858';
  if (props.light) return '#8492a6';
  return '#1fb6ff';
};

const Link = styled.a`
  display: inline-block;
  background: transparent;
  cursor: pointer;
  color: ${props => mapPropsToColor(props)};
  text-decoration: ${props => (props.underlined ? 'underline' : 'none')};
  margin: 0;
  padding: 0;
  ${transitions('all 0.15s linear')};
  &:hover {
    color: ${props => darken(0.1, mapPropsToColor(props))};
  }
`;

export default Link;
