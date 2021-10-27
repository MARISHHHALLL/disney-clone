import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlideData from './SlideData'
const SlideSection = () => {
  const [sliderData, setSliderData] = useState(SlideData)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Main {...settings}>
      {sliderData.map((data) => {
        const { id, source } = data
        return (
          <Spos key={id}>
            <img src={source} alt='' />
          </Spos>
        )
      })}
    </Main>
  )
}

export default SlideSection
const Main = styled(Slider)`
  padding-top: 10px;
  .slick-list {
    overflow: visible;
    cursor: pointer;
    gap: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: white;
  }
  .slick-dots li button:before {
    color: gray;
    font-size: 8px;
  }
  button {
    z-index: 10;
  }
`
const Spos = styled.div`
  // border: 4px solid transparent;
  img {
    border: 4px solid transparent;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    transition: all 250ms;
    &:hover {
      border: 4px solid whitesmoke;
      transform: scale(1.02);
    }
  }
`
