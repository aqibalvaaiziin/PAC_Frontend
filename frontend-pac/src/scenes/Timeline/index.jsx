import React, { useState, useEffect } from 'react'
import Section from '../../components/Section'
import { Header, Step, Grid, Icon } from 'semantic-ui-react';
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
        <Header as='h1' style={styles.contentColor}>Timeline</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Icon name="calendar outline" style={styles.timeIcon} />
              <Icon name="clock outline" style={styles.timeIcon} />
            </Grid.Column>
            <Grid.Column>
              <Step.Group vertical fluid>
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
                      <Step link>
                        <Step.Title>{timeline.nama}</Step.Title>
                        <Step.Description>{timeline.deskripsi}</Step.Description>
                        <Step.Description> Mulai &nbsp;&nbsp;&nbsp; : {`${startDate}-${startMonth}-${StartYear}`}</Step.Description>
                        <Step.Description> Selesai &nbsp;: {`${endDate}-${endMonth}-${endYear}`}</Step.Description>
                      </Step>
                    )
                  })
                }
              </Step.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Zoom>

    </Section>
  )
}

export default Timelines

const styles = {
  contentColor: {
    color: '#fff',
    fontSize: '40px',
    marginLeft: '180px',
    marginBottom: '20px'
  },
  timeIcon: {
    marginTop: '310px',
    color: '#fff',
    fontSize: '200px'
  }
}
