import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import {normalize} from 'polished';
import {Flex, Box} from 'grid-styled';
import {GhostButton} from './components/Button';
import {Heading} from './components/Heading';
import {Header} from './components/Header';
import {Workspace} from './components/Workspace';
import {Sidebar} from './components/Sidebar';
import Secret from './components/Secret/Secret';
import SidebarItem from './components/Sidebar/SidebarItem';

const Shell = styled.div`
  min-height: 100vh;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed|Open+Sans|Roboto');
  ${normalize()};
  * {
    color: #3c4858;
  }
  h1, h2, h3, h4, strong, b {
    font-family: 'Barlow Condensed'
  }
  button, input, a, textarea, select, p, div, ul, small {
    font-family: 'Roboto'
  }
`;

const Pane = styled.div`
  padding: 1rem;
`;

class App extends Component {
  render() {
    return (
      <Shell>
        <Header>
          <Flex align="center">
            <Heading>Etherpass</Heading>
            <Box ml="auto">
              <GhostButton dark>Sign out</GhostButton>
            </Box>
          </Flex>
        </Header>
        <Workspace>
          <Flex>
            <Box w={150}>
              <Sidebar>
                <SidebarItem title="All items" active />
                <SidebarItem title="Favorites" />
                <SidebarItem title="Tags" />
              </Sidebar>
            </Box>
            <Box w={200}>
              <Sidebar>
                <SidebarItem title={'Google'} />
                <SidebarItem title={'Amazon'} active />
                <SidebarItem title={'Apple'} />
              </Sidebar>
            </Box>
            <Box w={1 / 2}>
              <Pane>
                <Secret
                  title="Amazon"
                  username="optimusway"
                  password="hui123"
                  createdAt={new Date()}
                  lastModified={new Date()}
                  tags={['web', 'amzn', 'search']}
                />
              </Pane>
            </Box>
          </Flex>
        </Workspace>
      </Shell>
    );
  }
}

export default App;
