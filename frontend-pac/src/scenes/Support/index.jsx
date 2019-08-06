import React, { useState, useEffect } from 'react'
import { Grid, Header, Container } from 'semantic-ui-react';
import Axios from 'axios';
import Zoom from 'react-reveal/Zoom';

function Support() {

  const [supportedBy, setSupportedBy] = useState([])
  const [mediaPartner, setMediaPartner] = useState([])

  useEffect(() => {
    Axios.get('https://sistempac.herokuapp.com/supportedby')
      .then(res => setSupportedBy(res.data))

    Axios.get('https://sistempac.herokuapp.com/mediapartner')
      .then(res => setMediaPartner(res.data))
  })

  return (
    <div style={styles.bg}>
      <Container style={styles.marginContent}>
        <Zoom>
          <Grid columns={2} divided>
            <Grid.Row>

              <Grid.Column textAlign='center'>
                <Header as='h1' content='Media Partner' />
                <br />
                {
                  mediaPartner.map(media => (
                    <img src={media.logo} alt="logo" style={styles.imageContent} />
                  ))
                }
              </Grid.Column>

              <Grid.Column textAlign='center'>
                <Header as='h1' content='Supported By' />
                <br />
                {
                  supportedBy.map(support => (
                    <img src={support.logo} alt="logo" style={styles.imageContent} />
                  ))
                }
              </Grid.Column>

            </Grid.Row>
          </Grid>
          <br/>
          <hr />
        </Zoom>
      </Container>
    </div>
  )
}

export default Support

const styles = {
  bg: {
    background: '#fff'
  },
  contentColor: {
    color: '#fff',
    fontSize: '35px',
  },
  imageContent: {
    width: '200px',
    height: '200px'
  },
  marginContent:{
    marginTop:'100px',
    marginBottom:'100px',
  }
}
