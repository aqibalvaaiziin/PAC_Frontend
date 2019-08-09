import React, { useState, useEffect } from 'react'
import { Grid, Header, Container, Image, Segment } from 'semantic-ui-react'
import Axios from 'axios'
import Zoom from 'react-reveal/Zoom'

function Support() {
  const [supportedBy, setSupportedBy] = useState([])
  const [mediaPartner, setMediaPartner] = useState([])

  useEffect(() => {
    Axios.get('https://sistempac.herokuapp.com/supportedby').then(res =>
      setSupportedBy(res.data)
    )

    Axios.get('https://sistempac.herokuapp.com/mediapartner').then(res =>
      setMediaPartner(res.data)
    )
  })

  return (
    <Segment padded="very">
      <Container>
        <Header size="large" content="Media Partner" textAlign="center" />

        <Grid columns="5" verticalAlign="middle">
          {mediaPartner.map(media => (
            <Grid.Column>
              <Zoom right>
                <Image
                  src={media.logo}
                  alt="logo"
                  key={media._id}
                  size="small"
                />
              </Zoom>
            </Grid.Column>
          ))}
        </Grid>

        <Header size="large" content="Supported By" textAlign="center" />

        <Grid columns="5" textAlign="center">
          {supportedBy.map(support => (
            <Grid.Column>
              <Zoom>
                <Image
                  src={support.logo}
                  alt="logo"
                  key={support._id}
                  size="large"
                />
              </Zoom>
            </Grid.Column>
          ))}
        </Grid>
      </Container>
    </Segment>
  )
}

export default Support
