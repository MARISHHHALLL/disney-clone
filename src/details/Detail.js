import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router'
import db from '../firebase'
const Detail = () => {
  const { id } = useParams()
  const [piece, setPiece] = useState([])
  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((titan) => {
        if (titan.exists) {
          setPiece(titan.data())
        }
      })
  }, [])
  return (
    <Container>
      <Background>
        <img src={piece.background} alt='' />
      </Background>
      <Content>
        <LogoBack>
          <img src={piece.minilogo} alt='' />
        </LogoBack>
        <Buttons>
          <FrBtn>
            <img src='/images/play-icon-black.png' alt='' />
            <span>play</span>
          </FrBtn>
          <ScBtn>
            <img src='/images/play-icon-white.png' alt='' />
            <span>trailer</span>
          </ScBtn>
          <WatchL>+</WatchL>
          <GroupIt>
            <img src='/images/group-icon.png' alt='' />
          </GroupIt>
        </Buttons>
        <Title>{piece.title}</Title>
        <Description>{piece.description}</Description>
      </Content>
    </Container>
  )
}

export default Detail
const Container = styled.div`
  min-height: calc(100vh - 76px);
  padding: 0 30px;
  overflow: hidden;
  position: relative;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const Content = styled.div`
  padding: 30px 0 10px;
`
const LogoBack = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
const Buttons = styled.div`
  padding: 20px 30px;
  display: flex;
  gap: 20px;
  align-items: center;
`
const FrBtn = styled.button`
  height: 55px;
  padding: 0 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  img {
    height: 27px;
  }
`
const ScBtn = styled(FrBtn)`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid whitesmoke;
  color: white;
`
const WatchL = styled.button`
  border: 1px solid whitesmoke;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  font-size: 20px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const GroupIt = styled(WatchL)`
  background: black;
`
const Title = styled.div`
  padding: 0 30px;
  color: rgba(249, 249, 249, 0.8);
  text-transform: capitalize;
  font-size: 15px;
`
const Description = styled.div`
  padding: 10px 30px;
  max-width: 800px;
  color: rgba(249, 249, 249, 1);
  line-height: 1.4;
  font-size: 20px;
`
