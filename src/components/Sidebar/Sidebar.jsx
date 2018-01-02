import * as React from 'react';
import styled from 'styled-components';

const Sidebar = ({children, className}) => (
  <div className={className}>{children}</div>
);

const StyledSidebar = styled(Sidebar)`
  padding: 1rem;
  border-right: solid 1px #eff2f7;
  min-height: calc(100vh - 72px);
`;

export default StyledSidebar;
