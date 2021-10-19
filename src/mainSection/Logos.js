import React, { useState } from 'react'
import styled from 'styled-components'
import LogosData from './LogosData'
const Logos = () => {
  const [data, setData] = useState(LogosData)
  return (
    <LgosCon>
      {data.map((dt) => {
        const { id, slogo } = dt
        return (
          <Cont key={id}>
            <img src={slogo} alt='' />
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

  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.3, 0.97) 0s;
  &:hover {
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
