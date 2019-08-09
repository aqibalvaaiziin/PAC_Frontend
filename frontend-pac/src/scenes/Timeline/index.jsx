import React, { useState, useEffect } from 'react'
import Section from '../../components/Section'
import { Header, Step, Icon, List } from 'semantic-ui-react'
import Axios from 'axios'
import Zoom from 'react-reveal/Zoom'

function Timelines() {
  const [timelines, setTimelines] = useState([])

  useEffect(() => {
    Axios.get('https://sistempac.herokuapp.com/timeline').then(res =>
      setTimelines(res.data)
    )
  }, [])

  return (
    <Section
      bgImage={require('./adults-coffee-colleagues-1323592.jpg')}
      strength={200}
    >
      <Zoom>
        <Header as="h2" icon textAlign="center" inverted>
          <Icon name="calendar alternate outline" />
          <Header.Content>Timeline</Header.Content>
        </Header>

        <List inverted divided relaxed="very" align="center">
          {timelines.map(timeline => {
            const startDateTime = new Date(timeline.tgl_mulai)
            const startDate = startDateTime.getDate()
            const startMonth = startDateTime.getMonth() + 1
            const StartYear = startDateTime.getFullYear()

            const endDateTime = new Date(timeline.tgl_selesai)
            const endDate = endDateTime.getDate()
            const endMonth = endDateTime.getMonth() + 1
            const endYear = endDateTime.getFullYear()

            return (
              <List.Item key={timeline._id}>
                <List.Content>
                  <List.Header as="h3">{timeline.nama}</List.Header>
                  <List.Description>{timeline.deskripsi}</List.Description>

                  {startDate === endDate ? (
                    <Step.Group>
                      <Step>{`${startDate}-${startMonth}-${StartYear}`}</Step>
                    </Step.Group>
                  ) : (
                    <Step.Group>
                      <Step>
                        <Step.Title>Mulai</Step.Title>
                        {`${startDate}-${startMonth}-${StartYear}`}
                      </Step>

                      <Step>
                        <Step.Title>Sampai</Step.Title>
                        {`${endDate}-${endMonth}-${endYear}`}
                      </Step>
                    </Step.Group>
                  )}
                </List.Content>
              </List.Item>
            )
          })}
        </List>
      </Zoom>
    </Section>
  )
}

export default Timelines
