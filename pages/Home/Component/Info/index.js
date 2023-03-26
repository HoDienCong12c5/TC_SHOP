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
          <IconInFo src={images.icon.iconCart} />
          <Col style={{width:'calc(100% - 55px )',padding:'0px 10px'}}>
            <MediumText fontWeight={'bold'} textTransform className='mb-5'>
              MIỄN PHÍ GIAO NHẬN
            </MediumText>
            <MediumText>


              Miễn phí giao hàng trong khu vực nội thành Hồ Chí Minh cho đơn hàng từ 1.000.000VND
            </MediumText>
          </Col>
        </Row>
      </Col>
      <Col span={7} offset={1}>
        <Row>
          <IconInFo src={images.icon.iconCart} />
          <Col style={{width:'calc(100% - 55px )',padding:'0px 10px'}}>
            <MediumText fontWeight={'bold'} textTransform className='mb-5'>
            CAM KẾT CHẤT LƯỢNG
            </MediumText>
            <MediumText>
            Hoàn tiền 100% nếu sản phẩm không đúng mô tả
            </MediumText>
          </Col>
        </Row>
      </Col>
      <Col span={7} offset={1}>
        <Row>
          <IconInFo src={images.icon.iconCart} />
          <Col style={{width:'calc(100% - 55px )',padding:'0px 10px'}}>
            <MediumText fontWeight={'bold'} textTransform className='mb-5'>
            CHĂM SÓC KHÁCH HÀNG 24/7
            </MediumText>
            <MediumText>
            Hỗ trợ và giải đáp thắc mắc khách hàng 24/7
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
