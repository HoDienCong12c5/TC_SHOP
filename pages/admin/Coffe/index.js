import { Col, Row } from 'antd'
import React from 'react'
import Media from 'react-media'

const Coffee = () => {
  const renderDesktop = () => {
    return <>
      <Row justify={'space-around'}>
        <Col span={11} >
        </Col>
        <Col span={11} offset={1} >
        </Col>
      </Row>

    </>
  }
  const renderMobile = () => {

  }
  return (
    <div className='w-full'>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </div>
  )
}
export default Coffee
