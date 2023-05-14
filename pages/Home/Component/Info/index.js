import { images } from '@/common/images'
import { MediumText } from '@/Components/TextSize'
import { Col, Row } from 'antd'
import React from 'react'
import Media from 'react-media'
import { IconInFo } from './styled'

const InfoHome = () => {
  const renderDesktop = () => {
    return <Row className='w-full'>
      <Col span={7} >
        <Row>
          <IconInFo alt='Tinh thần và trách nhiệm' src={images.icon.iconResponsibility} />
          <Col style={{width:'calc(100% - 55px )',padding:'0px 10px'}}>
            <MediumText fontWeight={'bold'} textTransform className='mb-5'>
              Tinh thần và trách nhiệm
            </MediumText>
            <MediumText>
              Mỗi sản phẩm là biểu hiện trí tuệ và công sức bỏ ra.
            </MediumText>
          </Col>
        </Row>
      </Col>
      <Col span={7} offset={1}>
        <Row>
          <IconInFo alt='CAM KẾT CHẤT LƯỢNG' src={images.icon.iconShield} />
          <Col style={{width:'calc(100% - 55px )',padding:'0px 10px'}}>
            <MediumText fontWeight={'bold'} textTransform className='mb-5'>
            CAM KẾT CHẤT LƯỢNG
            </MediumText>
            <MediumText>
            Sản phẩm chúng tôi 100% chất lượng và tự nhiên.
            </MediumText>
          </Col>
        </Row>
      </Col>
      <Col span={7} offset={1}>
        <Row>
          <IconInFo alt='CHĂM SÓC KHÁCH HÀNG 24/7' src={images.icon.iconSupport} />
          <Col style={{width:'calc(100% - 55px )',padding:'0px 10px'}}>
            <MediumText fontWeight={'bold'} textTransform className='mb-5'>
            CHĂM SÓC KHÁCH HÀNG 24/7
            </MediumText>
            <MediumText>
            Hỗ trợ và giải đáp thắc mắc các thông tin 24/7.
            </MediumText>
          </Col>
        </Row>
      </Col>
    </Row>

  }
  const renderMobile = () => {
    return <></>

  }

  return (
    <Media query='(min-width: 768px)'>
      {(match) => {
        if (match) {
          return renderDesktop()
        }
        return renderMobile()
      }}

    </Media>
  )
}

export default InfoHome
