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
        <Grid columns={2} divided textAlign='center'>
          <Grid.Row>
            <Zoom right>
              <Grid.Column textAlign='center'>
                <Header as='h1' content='Media Partner' textAlign='center' />
                <br />
                {
                  mediaPartner.map(media => (
                    <img src={media.logo} alt="logo" style={styles.mediaContent} key={media._id} />
                  ))
                }
                <br/><br/>
                <hr />
              </Grid.Column>
            </Zoom>
          </Grid.Row>
          <br /> <br/> <br/>
          <Grid.Row>
            <Zoom>
              <Grid.Column textAlign='center'>
                <Header as='h1' content='Supported By' textAlign='center' />
                {
                  supportedBy.map(support => (
                    <img src={support.logo} alt="logo" style={styles.supportContent} key={support._id} />
                  ))
                }
              </Grid.Column>
            </Zoom>
          </Grid.Row>
        </Grid>
        <hr />
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
  mediaContent: {
    width: '200px',
    height: '150px',
    marginRight:'25px'
  },
  supportContent: {
    width: '500px',
    height: '270px',
    marginTop:'-55px',
    marginBottom:'-40px',
    marginRight:'15px'
  },
  marginContent: {
    marginTop: '50px',
    marginBottom: '50px',
  }
}
