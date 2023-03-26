import { images } from '@/common/images'
import { Col, Row } from 'antd'
import Aos from 'aos'
import React, { useEffect } from 'react'
import Media from 'react-media'
import { BgOtherProduct, BtnBuyOtherProduct, ContainerOtherProduct, ImgOtherProduct, TileOtherProduct } from './styled'

const OtherProduct = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])
  const renderDesktop = () => {
    return <Row className='animation__transformTop-5'>
      <Col className='col-basic gap-15' span={7}>
        <ImgOtherProduct src={images.landingPage.logo} alt={images.landingPage.logo}/>
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15' span={7} offset={1}>
        <ImgOtherProduct src={images.landingPage.product2} alt={images.landingPage.product2}/>
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15' span={7} offset={1}>
        <ImgOtherProduct src={images.landingPage.logo} alt={images.landingPage.logo}/>
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
    </Row>

  }
  const renderMobile = () => {
    return <div className='col-basic gap-40 animation__transformTopMobile-3'>
      <Col className='col-basic gap-15 w-full'>
        <ImgOtherProduct src={images.landingPage.logo} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15 w-full ' >
        <ImgOtherProduct src={images.landingPage.product2} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
      <Col className='col-basic gap-15 w-full ' >
        <ImgOtherProduct src={images.landingPage.logo} />
        <TileOtherProduct >
        120.000 VND
        </TileOtherProduct>
        <BtnBuyOtherProduct >
          Buy Now
        </BtnBuyOtherProduct>
      </Col>
    </div>

  }


  return (
    <ContainerOtherProduct data-aos="fade-up" >
      <BgOtherProduct />
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerOtherProduct>
  )
}

export default OtherProduct
