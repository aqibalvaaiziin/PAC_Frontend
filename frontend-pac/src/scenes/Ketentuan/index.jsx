import React from 'react'
import { Container, Header, Icon, List } from 'semantic-ui-react'
import Section from '../../components/Section'
import Zoom from 'react-reveal/Zoom'

function Ketentuan() {
  return (
    <Section
      bgImage={require('./depth-of-field-desk-essay-210661.jpg')}
      strength={200}
    >
      <Container>
        <Zoom>
          <Header as="h2" icon textAlign="center" inverted>
            <Icon name="list alternate outline" />
            <Header.Content>
              Ketentuan dan Prosedur pendaftaran PAC
            </Header.Content>
          </Header>
          <List inverted align="center">
            <List.Item>
              <List.Content>
                <List.Header>
                  Peserta lomba merupakan tim yang beranggotakan maksimal 3
                  orang.
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content>
                <List.Header>
                  Melengkapi data ketua dan anggota tim serta melampirkan scan
                  KTM.
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Zoom>
      </Container>
    </Section>
  )
}

export default Ketentuan
