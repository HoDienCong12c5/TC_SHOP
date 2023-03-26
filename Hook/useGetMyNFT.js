import { REACT_QUERY } from '@/common/constant'
import FirebaseService from '@/Services/FirebaseService'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useSelector } from 'react-redux'
const getAllData = async({ queryKey })=>{
  const account = queryKey[1]
  const data = await FirebaseService.storeCrossTech.getDataByAddress(account)
  if (data?.length > 0) {
    return data
  }
  return []
}
const useGetMyNFT = (page = 1) => {
  const metamaskRedux = useSelector(state => state.metamaskRedux)

  const { isLoading, error, data } = useQuery(
    [REACT_QUERY.GET_ALL_MY_NFT,metamaskRedux?.address,page],
    getAllData,

  )
  return {
    listMyNFT:data,
    loadingLitMyNFT:isLoading,
    errorLitMyNFT:error
  }
}

export default useGetMyNFT
