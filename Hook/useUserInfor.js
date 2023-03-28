import React from 'react'
import { useSelector } from 'react-redux'

const userUserInfo = () => {
  const userInfo = useSelector(state=>state.userInfo)
  return {
    isSigned:!!userInfo,
    name: userInfo?.name || null,
    avatar:  userInfo?.avatar || null,
    numberPhone:  userInfo?.numberPhone || null,
    userName:  userInfo?.userName || null,
    pass: userInfo?.pass || null,
    idUser:  userInfo?.id || null,
  }
}

export default userUserInfo
