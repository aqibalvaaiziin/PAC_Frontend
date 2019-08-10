import React from 'react'
import { Section } from '../../components/'
import { Grid, Header, Button, Image, Container } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

function Home() {
  return (
    <Section
      bgImage={require('./architecture-city-classic-358612.jpg')}
      strength={200}
    >
      <Container style={styles.section}>
        <Zoom>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Row>
              <Grid.Column>
                <Image
                  src="http://www.agtindia.com/wp-content/uploads/2017/09/mobile-app-development.png"
                  size="massive"
                />
              </Grid.Column>
              <Grid.Column>
                <Header size="huge" inverted>
                  Polinema Mobile Apps Competition
                </Header>
                <p style={styles.contentText}>
                  PAC diselenggarakan oleh Jurusan Teknologi Informasi
                  Politeknik Negeri Malang, sebagai wadah berkompetisi bagi
                  developer muda yang ingin berkreasi pada bidang pembuatan
                  Aplikasi Mobile.
                </p>
                <div style={styles.buttonPosition}>
                  <Button
                    size="large"
                    inverted
                    content="DAFTAR"
                    as="a"
                    href="http://pac.polinema.ac.id/panel"
                  />
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
  section: {
    paddingTop: 100
  },
  contentText: {
    fontSize: '23px',
    color: 'white',
    fontWeigth: '300'
  }
}
