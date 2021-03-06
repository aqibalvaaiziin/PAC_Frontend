import React from 'react'
import { Grid, Header, Container, List } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

function About() {
  return (
    <Container style={styles.contentPosition}>
      <Zoom>
        <Grid columns={2} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <Container>
                <Header size="huge">Tentang PAC</Header>
                <p style={styles.contentSize}>
                  PAC adalah singkatan dari
                  <b>Polinema Mobile Apps Competition</b>, pertama kali
                  diselenggarakan oleh Jurusan Teknologi Informasi Politeknik
                  Negeri Malang, sebagai wadah berkompetisi bagi developer muda
                  yang ingin berkreasi pada bidang pembuatan Aplikasi Mobile.
                  Kompetisi ini terbuka bagi seluruh mahasiswa di Indonesia,
                  dari segala jurusan, terutama yang memiliki kemampuan di
                  bidang Ilmu Teknologi dan Informasi, untuk mengembangkan
                  aplikasi mobile dan game yang{' '}
                  <b>kreatif, inovatif, dan berguna bagi masyarakat</b>{' '}
                  <span style={styles.tag}>#AyoNgodingMobile</span>
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Header size="huge">Persyaratan Umum</Header>
              <List size="big" relaxed="very">
                <List.Item>
                  Perguruan Tinggi peserta adalah perguruan tinggi yang
                  terdaftar pada laman PD DIKTI
                  <a href="http://forlap.dikti.go.id">
                    (http://forlap.dikti.go.id)
                  </a>
                </List.Item>
                <List.Item>
                  Peserta adalah mahasiswa aktif Program Diploma atau Strata 1
                  dengan umur maksimum 24 tahun pada bulan November 2019 ketika
                  PAC berlangsung.
                </List.Item>
                <List.Item>
                  Aplikasi yang dilombakan belum pernah dipublikasikan di media
                  apapun.
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Zoom>
    </Container>
  )
}

export default About

const styles = {
  contentPosition: {
    marginTop: '50px',
    marginBottom: '50px'
  },
  contentSize: {
    fontSize: '17px',
    marginTop: '20px'
  },
  tag: {
    color: '#70cbce'
  }
}
