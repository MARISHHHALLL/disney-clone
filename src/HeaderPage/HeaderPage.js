import React, { useEffect, useState } from 'react'
import './Hpage.css'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import HeaderData from './HeaderData'
import { Avatar, Zoom } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom'
import {
  selectUserName,
  selectUserPhoto,
  login,
  logout,
} from '../features/users/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider } from '../firebase'
const HeaderPage = () => {
  const [data, setData] = useState(HeaderData)
  const selectName = useSelector(selectUserName)
  const selectPhoto = useSelector(selectUserPhoto)
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        )
        history.push('/')
      } else {
        history.push('/login')
      }
    })
  }, [])
  const Onsignin = () => {
    auth.signInWithPopup(provider).then((sign) => {
      let temp = sign.user
      dispatch(
        login({
          name: temp.displayName,
          email: temp.email,
          photo: temp.photoURL,
        })
      )
      history.push('/')
    })
  }
  const signoutmethode = () => {
    auth.signOut().then(() => {
      dispatch(logout())
    })
    history.push('/login')
  }
  return (
    <Container className='header__container'>
      <div className='logo__header'>
        <Link to='/'>
          <img
            src='/images/logo.svg'
            style={{ height: '35px', objectFit: 'cover' }}
            alt=''
          />
        </Link>
      </div>
      {selectName ? (
        <>
          <FullContole className='list__header'>
            {data.map((Hdata) => {
              const { id, title, icon } = Hdata
              return (
                <a key={id}>
                  <img src={icon} className='icon__a' />
                  <ListHeader className='h4__after'>{title}</ListHeader>
                </a>
              )
            })}
          </FullContole>
          <Tooltip TransitionComponent={Zoom} title='LOG OUT' placement='left'>
            <Avatar
              onClick={signoutmethode}
              sx={{
                height: '40px',
                width: '40px;',
                objectFit: 'contain',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
              src={selectPhoto}
              className='Avatar__header'
            />
          </Tooltip>
        </>
      ) : (
        <LoginContainer>
          <LoginMethode onClick={Onsignin}>Login</LoginMethode>
        </LoginContainer>
      )}
    </Container>
  )
}

export default HeaderPage
const Container = styled.div``
const FullContole = styled.div`
  a {
    .icon__a svg {
      color: #fff;
      border-color: #fff;
      fill: #fff;
    }
  }
  a:hover {
    h4 {
      &::after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`
const ListHeader = styled.h4`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1.04px;
  transform: translateY(1px);
  position: relative;
  &::after {
    content: '';
    height: 2.5px;
    background: white;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    opacity: 0;
    transform: scale(0);
    transform-origin: left center;
    transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  }
`
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`
const LoginMethode = styled.div`
  color: white;
  padding: 8px 16px;
  border: 1px solid #fff;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 250ms cubic-bezier(0.67, 0.22, 0.18, 0.97) 0s;
  &:hover {
    color: #000;
    background: #fff;
    border-color: transparent;
  }
`
