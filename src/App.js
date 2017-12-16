import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';
import {normalize, transitions, modularScale} from 'polished';
import {Button, GhostButton, OutlinedButton} from './components/Button';
import {Link} from './components/Link';

const Shell = styled.div`
  min-height: 100vh;
  padding: 1rem;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Barlow+Condensed|Open+Sans|Roboto');
  ${normalize()};
  * {
    /* ${transitions('all 0.8s ease')}; */
    color: #3c4858;
  }
  h1, h2, h3, h4, strong, b {
    font-family: 'Barlow Condensed'
  }
  button, input, a, textarea, select, p, div, ul, small {
    font-family: 'Roboto'
  }
`;

class App extends Component {
  render() {
    return (
      <Shell>
        <h1>Etherpass</h1>
        <Button>Primary</Button>
        <GhostButton>Ghost</GhostButton>
        <OutlinedButton>Outlined</OutlinedButton>
        <Link>Outlined</Link>
        <Link dark>Outlined</Link>
        <Link light>Outlined</Link>
      </Shell>
    );
  }
}

export default App;
