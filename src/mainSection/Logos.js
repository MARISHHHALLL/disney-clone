import React, { useState } from 'react'
import styled from 'styled-components'
import LogosData from './LogosData'
const Logos = () => {
  const [data, setData] = useState(LogosData)
  return (
    <LgosCon>
      {data.map((dt) => {
        const { id, slogo, svideo } = dt
        return (
          <Cont key={id}>
            <img src={slogo} alt='' />
            <video autoPlay='true' muted loop='true' playsInline='true'>
              <source src={svideo} type='video/mp4' />
            </video>
          </Cont>
        )
      })}
    </LgosCon>
  )
}

export default Logos
const LgosCon = styled.div`
  margin-top: 40px;
  display: grid;
  padding: 30px 0 36px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
`
const Cont = styled.div`
  cursor: pointer;
  border: 4px solid rgba(249, 249, 249, 0.1);
  padding-top: 56.25%;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.3, 0.97) 0s;
  position: relative;
  overflow: hidden;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: 0;
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
      visibility: visible;
    }
  }
`
