import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectMovie } from '../features/movies/movieSlice'
import { Link } from 'react-router-dom'
const Context = () => {
  const selector = useSelector(selectMovie)
  // const [Cdata, setCdata] = useState(selector)
  return (
    <Container>
      <h4>recommended for you</h4>
      <Content>
        {selector &&
          selector.map((data) => {
            return (
              <Wrap key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <img src={data.background} alt='' />
                </Link>
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
    position: relative;
    padding-left: 25px;
    text-transform: capitalize;
    &:before {
      content: '';
      height: 2px;
      width: 15px;
      background: white;
      position: absolute;
      left: 5px;
      top: 9px;
      right: 0;
    }
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
