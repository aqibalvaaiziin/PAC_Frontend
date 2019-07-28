import React from 'react'
import Section from '../../components/Section'
import { Header, Step } from 'semantic-ui-react';

function Timelines() {

  const stepContents = [
    {
      icon: 'list alternate outline',
      title: 'Pendaftaran',
      description: '1 September 2018 - 30 September 2018',
    },
    {
      icon: 'edit',
      title: 'Babak Penyisihan',
      description: 'Babak penyisihan tahap 1 akan di umumkan tanggal 2 Oktober 2018'
    },
    {
      icon: 'announcement',
      title: 'Pengumuman Babak Penyisihan',
      description: 'Pengumuman babak penyisihan tahap 1 akan di umumkan tanggal 2 Oktober 2018'
    },
    {
      icon: 'archive',
      title: 'Pengumpulan Video Demo Aplikasi',
      description: 'Pengumpulan paling lambat tanggal 22 Oktober 2018'
    },
    {
      icon: 'announcement',
      title: 'Pengumuman Finalis',
      description: 'Pengumuman peserta yang lolos ke babak final akan di umumkan tanggal 24 Oktober 2018'
    },
    {
      icon: 'flag',
      title: 'Final',
      description: 'Final lomba Polinema Mobile Apps And Game Competition tanggal 27 Oktober 2018'
    },

  ]

  return (
    <Section bgImage={require('./adults-coffee-colleagues-1323592.jpg')} strength={200}>
      <Header as='h1' style={styles.contentColor}>Timeline</Header>
      <Step.Group vertical fluid>
        {
          stepContents.map(content => (
            <Step link
              icon={content.icon}
              title={content.title}
              description={content.description}
            />
          ))
        }
      </Step.Group>
    </Section>
  )
}

export default Timelines

const styles = {
  contentColor: {
    color: '#fff'
  }
}
