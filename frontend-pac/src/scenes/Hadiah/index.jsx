import React, { useState, useEffect } from 'react'
import {
  Card,
  Grid,
  GridColumn,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'
import Axios from 'axios'
function Hadiah() {
  const [hadiah, setHadiah] = useState([])

  useEffect(() => {
    Axios.get('https://sistempac.herokuapp.com/hadiah').then(res =>
      setHadiah(res.data)
    )
  }, [])

  return (
    <Segment padded="very">
      <Zoom>
        <Header as="h2" icon textAlign="center">
          <Icon name="gift" />
          <Header.Content>Hadiah</Header.Content>
        </Header>

        <Grid columns={3}>
          <Grid.Row>
            {hadiah.map(ranking => (
              <GridColumn style={styles.rankPosition} key={ranking._id}>
                <Card>
                  <Card.Content textAlign="center" style={styles.headerColor}>
                    <Card.Header style={styles.textColor}>
                      {ranking.judul}
                    </Card.Header>
                  </Card.Content>

                  <Card.Content textAlign="center">
                    <Card.Header>Rp.{ranking.nominal}</Card.Header>
                  </Card.Content>

                  <Card.Content textAlign="center">
                    <b>PIAGAM</b>
                  </Card.Content>

                  <Card.Content textAlign="center">
                    <b>SERTIFIKAT</b>
                  </Card.Content>
                </Card>
              </GridColumn>
            ))}
          </Grid.Row>
        </Grid>
        <br />
        <br />
        <Header as="h3" textAlign="center" style={styles.contentBottom}>
          **Hadiah Dipotong Pajak
        </Header>
        <br />
        <br />
      </Zoom>
    </Segment>
  )
}

export default Hadiah

const styles = {
  rankPosition: {
    marginLeft: '-90px',
    position: 'relative',
    left: '27.2%',
    transform: 'translateX(-27.2%)',
    marginTop: '20px'
  },
  contentPosition: {
    marginTop: '50px'
  },
  bgColor: {
    background: '#2aaefd'
  },
  headerColor: {
    background: '#000'
  },
  textColor: {
    color: '#fff'
  },
  contentBottom: {
    marginTop: '10px'
  }
}
