import * as React from 'react';
import styled from 'styled-components';
import {Title} from '../Heading';
import {FormField, Input} from '../Form';
import {Button} from '../Button';
import {Link} from '../Link';
import {Flex, Box} from 'grid-styled';

const asDateAndTime = d =>
  d.toLocaleDateString() + ' ' + d.toLocaleTimeString();

const Secret = ({
  title,
  username,
  password,
  tags,
  createdAt,
  lastModified,
  className
}) => (
  <div className={className}>
    <Title>{title}</Title>
    <FormField label="username">
      <Input defaultValue={username} />
    </FormField>
    <FormField label="password">
      <Input defaultValue={password} />
    </FormField>
    <FormField label="tags">
      <span>{tags.join(', ')}</span>
    </FormField>
    <FormField label="created at">
      <span>{asDateAndTime(createdAt)}</span>
    </FormField>
    <FormField label="last modified">
      <span>{asDateAndTime(lastModified)}</span>
    </FormField>
    <Flex align="center">
      <Box mr={10}>
        <Button>Save</Button>
      </Box>
      <Link>Cancel</Link>
    </Flex>
  </div>
);

const StyledSecret = styled(Secret)`
  padding: 1rem 2rem;
`;

export default StyledSecret;
