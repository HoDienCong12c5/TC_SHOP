import MyLoading from '@/Components/MyLoading';
import useGetAllCart from '@/Hook/useGetAllCart';
import useGetAllCoffee from '@/Hook/useGetAllCoffee';
import React, { useEffect, useRef, useState } from 'react'
import CartItem from '../CartItem';

const TableDesktop = ({
  listCartRef,
}) => {
  const {listAllNFT, loadingLitAllNFT} = useGetAllCoffee()
  const {listAllCart, loadingAllCart} = useGetAllCart()


  const renderCartItem = (itemCart,index) => {
    return <CartItem
      itemCart={itemCart}
      indexCartItem={index}
      listCartRef={listCartRef}
      listAllCoffee={listAllNFT}
    />
  }
  return (
    loadingLitAllNFT || loadingAllCart ? (
      <MyLoading />
    ) : (
      listAllCart.map((cartItem,index)=>{
        return renderCartItem(cartItem,index)
      })
    )
  )
}

export default TableDesktop
