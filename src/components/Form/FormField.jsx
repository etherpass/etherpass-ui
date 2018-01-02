import * as React from 'react';
import styled from 'styled-components';

const FormField = ({label = '', children, className}) => (
  <div className={className}>
    <label>{label}</label>
    {children}
  </div>
);

const StyledFormField = styled(FormField)`
  padding: 1rem 0;
  min-height: 40px;
  label {
    color: #1f2d3d;
    display: inline-block;
    margin-right: 1rem;
    min-width: 100px;
  }
`;

export default StyledFormField;
