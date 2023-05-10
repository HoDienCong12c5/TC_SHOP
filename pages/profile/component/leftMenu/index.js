import ButtonBasic from '@/Components/ButtonBasic';
import ImageNext from '@/Components/ImageNext';
import { useWorkModal } from '@/Hook/useModal';
import { images } from '@/common/images';
import React, { useState } from 'react'
import Media from 'react-media';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const Icon = styled(ImageNext)`
  width: 25px !important;
  height: 25px !important;
  margin-right: 5px;
`
const LeftMenu = ({
  callBack,
}) => {
  const renderDesktop = (second) => {
    const [menuSelect, setMenuSelect] = useState('my-profile')
    const message = useSelector(state => state.locale.messages)
    const {showModal, hideModal} = useWorkModal()
    return (
      <>
        <ButtonBasic>
          <Icon src={images.icon.avatarDefault}/>
          {message.myProfile.myProfile}
        </ButtonBasic>
      </>
    )
  }
  const renderMobile = (params) => {
    return (
      <></>
    )
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

export default LeftMenu
