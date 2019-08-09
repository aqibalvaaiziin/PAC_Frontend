import React from 'react'
import { Section } from '../../components/'
import { Grid, Header, Container, Button } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

function Home() {
  return (
    <Section
      bgImage={require('./architecture-city-classic-358612.jpg')}
      strength={200}
    >
      <Container>
        <Zoom>
          <Grid columns={2} style={styles.gridPosition}>
            <Grid.Row>
              <Grid.Column>
                <img
                  src="http://pac.polinema.ac.id/img/phone.png"
                  alt=""
                  style={styles.image}
                />
              </Grid.Column>
              <Grid.Column style={styles.secondGrid}>
                <Header size="huge" style={styles.headerText}>
                  Polinema Mobile Apps Competition
                </Header>
                <p style={styles.ContentText}>
                  PAC diselenggarakan oleh Jurusan Teknologi Informasi
                  Politeknik Negeri Malang, sebagai wadah berkompetisi bagi
                  developer muda yang ingin berkreasi pada bidang pembuatan
                  Aplikasi Mobile.
                </p>
                <div style={styles.buttonPosition}>
                  <Button size="large" inverted content="DAFTAR" />
                  <Button size="large" inverted content="TENTANG PAC" />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Zoom>
      </Container>
    </Section>
  )
}

export default Home

const styles = {
  image: {
    width: '650px',
    height: '700px',
    left: '20%'
  },
  gridPosition: {
    marginTop: '150px'
  },
  headerText: {
    fontSize: '40px',
    color: 'white',
    marginLeft: '100px'
  },
  ContentText: {
    marginTop: '0px',
    fontSize: '23px',
    color: 'white',
    fontWeigth: '300',
    marginLeft: '100px'
  },
  buttonPosition: {
    margin: '40px 0px 0px 100px'
  },
  secondGrid: {
    marginTop: '50px'
  }
}
