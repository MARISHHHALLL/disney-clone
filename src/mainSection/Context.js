import React, { useState } from 'react'
import styled from 'styled-components'
import ContextData from './ContextData'
const Context = () => {
  const [Cdata, setCdata] = useState(ContextData)
  return (
    <Container>
      <h4>recommended for you</h4>
      <Content>
        {Cdata.map((data) => {
          const { id, src } = data
          return (
            <Wrap key={id}>
              <img src={src} alt='' />
            </Wrap>
          )
        })}
      </Content>
    </Container>
  )
}

export default Context
const Container = styled.div`
  padding-bottom: 20px;
  h4 {
    color: white;
    font-size: 17px;
    letter-spacing: 0.9px;
    text-transform: capitalize;
  }
`
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 10px;
`
const Wrap = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border: 4px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.04);
    border-color: rgba(249, 249, 249, 0.8);
  }
`
