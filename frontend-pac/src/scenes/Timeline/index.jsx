import React, { useState, useEffect } from 'react'
import Section from '../../components/Section'
import { Header, Step, Icon } from 'semantic-ui-react';
import Axios from 'axios';
import Zoom from 'react-reveal/Zoom';

function Timelines() {

  const [timelines, setTimelines] = useState([])

  useEffect(() => {
    Axios.get('https://sistempac.herokuapp.com/timeline')
      .then(res => setTimelines(res.data))

  })

  return (
    <Section bgImage={require('./adults-coffee-colleagues-1323592.jpg')} strength={200}>
      <Zoom>
        <Header as='h2' icon textAlign='center' style={styles.contentColor}>
          <Icon name='calendar alternate outline' />
          <Header.Content>Timeline</Header.Content>
        </Header>

        <Step.Group style={styles.timePosition} vertical>
          {
            timelines.map(timeline => {

              const startDateTime = new Date(timeline.tgl_mulai)
              const startDate = startDateTime.getDate()
              const startMonth = startDateTime.getMonth() + 1
              const StartYear = startDateTime.getFullYear()

              const endDateTime = new Date(timeline.tgl_selesai)
              const endDate = endDateTime.getDate()
              const endMonth = endDateTime.getMonth() + 1
              const endYear = endDateTime.getFullYear()

              return (
                <Step link key={timeline._id}>
                  <Step.Content>
                    <Step.Title>{timeline.nama}</Step.Title>
                    <Step.Description>{timeline.deskripsi}</Step.Description>
                    <Step.Description> Mulai &nbsp;&nbsp;&nbsp; : {`${startDate}-${startMonth}-${StartYear}`}</Step.Description>
                    <Step.Description> Selesai &nbsp;: {`${endDate}-${endMonth}-${endYear}`}</Step.Description>
                  </Step.Content>
                </Step>
              )
            })
          }
        </Step.Group>

      </Zoom>

    </Section>
  )
}

export default Timelines

const styles = {
  contentColor: {
    color: '#fff',
    fontSize: '30px',
    marginBottom: '20px'
  },
  timePosition: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}
