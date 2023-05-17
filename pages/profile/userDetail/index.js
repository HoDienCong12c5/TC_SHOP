import userUserInfo from '@/Hook/useUserInfor'
import React from 'react'
import { Avatar, AvatarContainer, UserDetailContainer } from './styled'
import Media from 'react-media'
import { Button, Col, Form, Row, Upload } from 'antd'
import { images } from '@/common/images'
import { UploadOutlined } from '@ant-design/icons'
import { NormalText } from '@/Components/TextSize'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import MyInput from '@/Components/MyInput'
import DataTime from '@/Components/DataTime'

const ItemInfo = ({name,value,callBack}) => {
  const [isEdit, setIsEdit] = useState(false)
  const [valueText, setValueText] = useState(value)
  const message = useSelector(state => state.locale.messages)
  const onChangeText = (e) => {
    setValueText(e.target.value)
  }
  const onClick = () => {
    if(isEdit){
      callBack && callBack(value)
      setIsEdit(!isEdit)
    }else{
      setIsEdit(!isEdit)
    }
  }
  return <div key={name + value} className='flex mb-15 h-30' >
    <div >
      <NormalText className='mr-10'>
        {name}  :
      </NormalText>
    </div>
    <div >
      {
        isEdit ? (
          <MyInput value={valueText} onChange={onChangeText}/>
        ) : (
          <NormalText className='text-start'>
            {valueText}
          </NormalText>
        )
      }
    </div>
    <NormalText
      onClick={onClick}
      className='hover ml-5 text-underline'
      color='blue'>
      {isEdit ? 'Lưu' : message.common.edit}
    </NormalText>
  </div>
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
        <div style={{textAlign:'center'}}>
          <AvatarContainer >
            <Avatar
              sizes={200}
              alt={userInfo.name}
              src={userInfo.avatar ?? images.icon.avatarDefault}
            />

          </AvatarContainer>
          <Upload showUploadList={false} onChange={opLoadAvatar}>
            <Button
              className='mt-20 mb-10 m-auto'
              icon={<UploadOutlined />}
            >
              {message.common.uploadImage}
            </Button>
          </Upload>
          <NormalText >
        Dụng lượng file tối đa 1 MB
          Định dạng:.JPEG, .PNG
          </NormalText>
        </div>

      </Col>
      <Col span={16}>
        <Form >

        </Form>
        <ItemInfo name={message.textPopular.nameProduct} value={userInfo.name}/>
        <ItemInfo name={message.userDetail.sdt} value={userInfo.numberPhone}/>
        <ItemInfo name={message.userDetail.addressNow} value={userInfo.numberPhone}/>
        <DataTime />
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
