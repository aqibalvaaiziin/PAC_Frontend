import React from 'react'
import { Card, Container, Grid, GridColumn, Header, List } from 'semantic-ui-react';

function Hadiah() {

  const rankings = [
    {
      rank: 'Juara I',
      value: 'Rp.3.500.000',
      desc: 'Setiap pemenang juara I lomba Polinema Mobile Apps And Game Competition akan mendapatkan'
    },
    {
      rank: 'Juara II',
      value: 'Rp.3.000.000',
      desc: 'Setiap pemenang juara II lomba Polinema Mobile Apps And Game Competition akan mendapatkan'
    },
    {
      rank: 'Juara III',
      value: 'Rp.2.500.000',
      desc: 'Setiap pemenang juara III lomba Polinema Mobile Apps And Game Competition akan mendapatkan'
    },
  ]

  const contenders = [
    {
      rank:'Juara Harapan 1',
      value: 'Rp.1.000.000'
    },
    {
      rank:'Juara Harapan 2',
      value: 'Rp.1.000.000'
    },
    {
      rank:'Juara Harapan 3',
      value: 'Rp.1.000.000'
    },
  ]

  return (
    <div style={styles.bgColor}>
      <Container>
        <br/>
        <Header as='h1' textAlign='center'>Hadiah</Header>
        <br/>
        <Grid columns={3} >
          <Grid.Row>
            {
              rankings.map(ranking => (
                <GridColumn style={styles.rankPosition}>

                  <Card color='black'>

                    <Card.Content textAlign='center' style={styles.headerColor}>
                      <Card.Header style={styles.textColor}>
                        {ranking.rank}
                      </Card.Header>
                    </Card.Content>

                    <Card.Content textAlign='center'>
                      <Card.Header>
                        {ranking.value}
                      </Card.Header>
                    </Card.Content>

                    <Card.Content textAlign='center'>
                      <Card.Meta>
                        {ranking.desc}
                      </Card.Meta>
                    </Card.Content>

                    <Card.Content textAlign='center'>
                      <b>PIAGAM</b>
                    </Card.Content>

                    <Card.Content textAlign='center'>
                      <b>SERTIFIKAT</b>
                    </Card.Content>
                  </Card>
                </GridColumn>
              ))
            }
          </Grid.Row>

        </Grid>
        <Header as='h1' textAlign='center' style={styles.contentPosition}>Juara Harapan</Header>

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <List divided relaxed>
                {
                  contenders.map(contender => (
                    <List.Item>
                      <List.Icon name='trophy' size='large' verticalAlign='middle' />
                      <List.Content>
                        <List.Header>{contender.rank}</List.Header>
                        <List.Description>{contender.value}</List.Description>
                      </List.Content>
                    </List.Item>
                  ))
                }
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Header as='h3' textAlign='center' style={styles.contentBottom}>**Hadiah Dipotong Pajak</Header>
        <br/>
      </Container>
    </div>
  )
}

export default Hadiah

const styles = {
  rankPosition: {
    marginLeft: '-90px',
    position: 'relative',
    left: '27.2%',
    transform: 'translateX(-27.2%)',
  },
  contentPosition: {
    marginTop: '50px'
  },
  bgColor: {
    background: '#3C9eE6'
  },
  headerColor: {
    background: '#000',
  },
  textColor: {
    color: '#fff'
  },
  contentBottom:{
    marginTop:'10px'
  }
}