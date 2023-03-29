import useGetAllCart from '@/Hook/useGetAllCart'
import useUserData from '@/Hook/useUserData'
import React, { useEffect, useRef } from 'react'
import Media from 'react-media'
import TableDesktop from './component/TableDesktop'

const MyCart = () => {
  // const {} = useUserData()
  const listCartRef = useRef([])
  const {listAllCart, loadingAllCart} = useGetAllCart()
  useEffect(() => {
    if(!loadingAllCart){
      listCartRef.current = listAllCart
    }
  }, [loadingAllCart])
  return (
    loadingAllCart && listCartRef.current .length > 0 ? (
      <></>
    ) : (
      <div className='container-basic'>
        <Media query='(min-width: 768px)'>
          {(match) => {
            if (match) {
              return <TableDesktop listCartRef={listCartRef}/>
            }
            return <></>
          }}

        </Media>
      </div>
    )
  )
}

export default React.memo(MyCart)
