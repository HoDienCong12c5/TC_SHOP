import useGetAllCart from '@/Hook/useGetAllCart'
import useUserData from '@/Hook/useUserData'
import React from 'react'

const MyCart = () => {
  // const {} = useUserData()
  const {listAllCart} = useGetAllCart()
  console.log('====================================');
  console.log({listAllCart});
  console.log('====================================');
  return (
    <div>MyCart</div>
  )
}

export default React.memo(MyCart)
