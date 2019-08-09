import React from 'react'
import { Container, Header } from 'semantic-ui-react';

function Footer() {
  return (
    <div style={styles.bgColor}>
      <br />
      <br />
      <Container textAlign='center'>
        <Header as='h4' content='Copyright © 2019. All rights reserved. ' style={styles.textColor} />
      </Container>
      <br /><br />
    </div>
  )
}

export default Footer

const styles = {
  bgColor: {
    background: '#222'
  },
  textColor: {
    color: 'white'
  }
}