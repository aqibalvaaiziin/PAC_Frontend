import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { scroller } from 'react-scroll'
import { Menu, Grid } from 'semantic-ui-react'

function Navigation(props) {

  const [isMenuTransparent, setIsMenuTransparent] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function handleScroll(event) {
    const scrollPosition = window.scrollY
    setIsMenuTransparent(scrollPosition > 60 ? false : true)
  }

  function scrollTo(element) {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOut',
      offset: -74
    })
  }

  function renderMenu() {
    return props.menu.map((item, index) => (
      <Menu.Item
        key={index}
        name={item}
        link
        content={item}
        onClick={() => scrollTo(item)}
      />
    ))
  }


  return (
      <Grid columns="1">
        <Grid.Column only="computer">
          <TransparentMenu
            size="massive"
            borderless
            fixed="top"
            inverted
            transparent={isMenuTransparent}
            stackable>
            <Menu.Menu position='right' style={styles.navPosition}>
              {renderMenu()}
            </Menu.Menu>
          </TransparentMenu>
        </Grid.Column>
      </Grid>
  )
}


export default Navigation

const TransparentMenu = styled(Menu)`
  background-color: ${props =>
    props.transparent
      ? 'rgba(0, 0, 0, 0) !important'
      : 'rgba(0, 0, 0, 0.9) !important'};
  transition: all 0.5s;
`

const styles = {
  navPosition: {
    marginRight: '50px'
  }
}