import React from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'


function Section(props) {
  return (
    <div>
      <Parallax bgImage={props.bgImage}>
        <InnerContainer fluid={props.fluid}>
          {props.children}
        </InnerContainer>
      </Parallax>
    </div>
  )
}

const Parallax = styled.div`
  background:
  ${props =>
    props.bgImage === undefined
      ? ''
      : 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))'},
    url("${props => props.bgImage}");  
  height: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const InnerContainer = styled(Container)`
  padding: ${props => (props.fluid ? 30 : 0)}px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-top: ${props =>
    props.bordered ? 'dashed 2px #a3a3a3 !important' : ''};
`

export default Section
