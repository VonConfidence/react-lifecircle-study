import React from 'react';

import styles from './index.css';

// styled-components
/*
  import styled from 'styled-components

  const Div = styled.div`
    color: 'red';
    font-size: 16px;
  `

  const Div2 = styled(Div)`
    background: blue;
  `
*/

export default class CssStyle extends React.Component {
  render() {
    return (
      <div className={styles.title}>CSS Style test</div>
    );
  }
}