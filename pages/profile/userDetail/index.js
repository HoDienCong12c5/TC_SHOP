import userUserInfo from '@/Hook/useUserInfor'
import React from 'react'
import { Avatar, UserDetailContainer } from './styled'
import Media from 'react-media'
import { Col, Row } from 'antd'
import { images } from '@/common/images'

const UserDetail = () => {
  const userInfo = userUserInfo()

  const renderDesktop = () => {
    return <Row>
      <Col span={8}>
        <div style={{width:'50%'}}>
          <Avatar
            sizes={200}
            alt={userInfo.name}
            src={userInfo.avatar ?? images.icon.avatarDefault}
          />
        </div>
      </Col>
      <Col span={16}>
        <div>
        avater
        </div>
      </Col>
    </Row>
  }
  const renderMobile = () => {
    return <></>
  }
  return (
    <UserDetailContainer >
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </UserDetailContainer>
  )
}

export default UserDetail
