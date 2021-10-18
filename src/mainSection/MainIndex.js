import React from 'react'
import SlideSection from './SlideSection'
import styled from 'styled-components'
const MainIndex = () => {
  return (
    <Container>
      <SlideSection />
    </Container>
  )
}

export default MainIndex
const Container = styled.div`
  // background: #1a1d29;
  min-height: calc(100vh - 60px);
  padding: 0 30px;
  overflow: hidden;
  position: relative;
  &::before {
    content: '';
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
