import React from 'react'
import styled from 'styled-components'
const Login = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src='/images/cta-logo-one.svg' alt='' />
        </Logo>
        <MidBtn>get all there</MidBtn>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <LastLogo>
          <img src='/images/cta-logo-two.png' alt='' />
        </LastLogo>
      </Content>
    </Container>
  )
}

export default Login
const Container = styled.div`
  min-height: calc(100vh - 76px);
  height: 100%;
  padding: 0 30px;
  color: white;
  // background: #141622;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    background: url('/images/login-background.jpg') top center / cover no-repeat
      fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // border: 2px solid white;
  // height: 40vh;
  width: 40vw;
`
const Logo = styled.div`
  margin: 0px 0 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
const MidBtn = styled.a`
  height: 50px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  background: #0063e5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 250ms;
  letter-spacing: 1.5px;
  &:hover {
    background: #0483ee;
  }
`
const Description = styled.div`
  font-size: 11px;
  text-align: center;
  margin-top: 10px;
  letter-spacing: 1.5px;
  width: 100%;
  line-height: 1.5;
`
const LastLogo = styled.div`
  margin: 10px 0;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
