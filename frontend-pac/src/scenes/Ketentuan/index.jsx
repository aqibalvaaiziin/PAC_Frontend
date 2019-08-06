import React from 'react'
import { Container, Header, Icon, List } from 'semantic-ui-react';
import Section from '../../components/Section'
import Zoom from 'react-reveal/Zoom';

function Ketentuan() {
  return (
    <Section bgImage={require('./depth-of-field-desk-essay-210661.jpg')} strength={200}>
      <Container>
        <Zoom>
          <Header as='h2' icon textAlign='center' style={styles.contentColor}>
            <Icon name='list alternate outline' />
            <Header.Content>Ketentuan dan Prosedur pendaftaran PAC</Header.Content>
          </Header>
          <br />
          <List>
            <List.Item>
              <Header as='h3' style={styles.contentColor}>Ketentuan Peserta Kompetisi : </Header>
            </List.Item>
            <List.Item as='h4' style={styles.contentColor}>
              <Icon name='users' />
              <List.Content>
                Peserta lomba merupakan tim yang beranggotakan <b>maksimal 3 orang</b>.
            </List.Content>
            </List.Item>
            <List.Item as='h4' style={styles.contentColor}>
              <Icon name='address card outline' />
              <List.Content>
                Melengkapi data ketua dan anggota tim serta melampirkan scan KTM.
            </List.Content>
            </List.Item>
          </List>
        </Zoom>
      </Container>
    </Section>
  )
}

export default Ketentuan

const styles = {
  contentColor: {
    color: '#fff'
  }
}

