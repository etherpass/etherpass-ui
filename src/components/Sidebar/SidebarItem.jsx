import * as React from 'react';
import Link from '../Link/Link';
import styled, {css} from 'styled-components';

const activeStyle = css`
  background: #f9fafc;
  border-radius: 4px;
  a {
    color: #1fb6ff;
  }
`;

const SidebarItem = ({title, active, children, onClick, className}) => (
  <div className={className}>
    <Link dark>{title || children}</Link>
  </div>
);

const StyledSidebarItem = styled(SidebarItem)`
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 1rem;
  ${p => p.active && activeStyle};
  :hover,
  :active {
    ${activeStyle};
  }
`;

export default StyledSidebarItem;
