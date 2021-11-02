import React, { useState } from 'react'
import './Hpage.css'
import styled from 'styled-components'
import HeaderData from './HeaderData'
import { Avatar, Zoom } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { Link } from 'react-router-dom'
const HeaderPage = () => {
  const [data, setData] = useState(HeaderData)
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
      <Tooltip TransitionComponent={Zoom} title='name' placement='left'>
        <Avatar
          sx={{
            height: '40px',
            width: '40px;',
            objectFit: 'contain',
            cursor: 'pointer',
          }}
          src=''
          className='Avatar__header'
        />
      </Tooltip>
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
