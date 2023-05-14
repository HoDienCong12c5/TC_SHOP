import userUserInfo from '@/Hook/useUserInfor'
import React from 'react'
import { Avatar, AvatarContainer, UserDetailContainer } from './styled'
import Media from 'react-media'
import { Button, Col, Row, Upload } from 'antd'
import { images } from '@/common/images'
import { UploadOutlined } from '@ant-design/icons'
import { NormalText } from '@/Components/TextSize'
import { useSelector } from 'react-redux'

const ItemInfo = ({name,value}) => {
  return <Row key={name + value}>
    <Col span={8}>
      <NormalText>
        {name}  :
      </NormalText>
    </Col>
    <Col span={16}>
      {value}
    </Col>
  </Row>
}
const UserDetail = () => {
  const userInfo = userUserInfo()
  const message = useSelector(state => state.locale.messages)
  const opLoadAvatar = (file) => {
    const sizeImage = 1024 * 5
    if(file.type === 'image/jpeg' || file.type === 'image/png'){

    }
    if(sizeImage < file.size){

    }
    if (file.file.status !== 'uploading') {
      console.log(file.file);
    }
    console.log(file.file);
  }
  const renderDesktop = () => {
    return <Row>
      <Col span={8}>
        <AvatarContainer >
          <Avatar
            sizes={200}
            alt={userInfo.name}
            src={userInfo.avatar ?? images.icon.avatarDefault}
          />

        </AvatarContainer>
        <Upload showUploadList={false} onChange={opLoadAvatar}>
          <Button
            className='mt-20 mb-10'
            icon={<UploadOutlined />}
          >
            {message.common.uploadImage}
          </Button>
        </Upload>
        <NormalText >
        Dụng lượng file tối đa 1 MB
          Định dạng:.JPEG, .PNG
        </NormalText>
      </Col>
      <Col span={16}>
        <ItemInfo name={'SDT'} value={userInfo.numberPhone}/>
        <ItemInfo name={'SDT'} value={userInfo.numberPhone}/>
        <ItemInfo name={'SDT'} value={userInfo.numberPhone}/>
        <ItemInfo name={'SDT'} value={userInfo.numberPhone}/>
        <ItemInfo name={'SDT'} value={userInfo.numberPhone}/>

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
