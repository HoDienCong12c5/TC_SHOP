import Metamask from '@/Modal/Metamask';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import ReduxService from '@/Utils/ReduxService';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Web3Provider = ({children}) => {
  const connectionMethod = useSelector(state=>state.connectionMethod)
  useEffect(() => {
    const initWeb3 = async()=>{
      if(ReduxService.getConnectionMethod() === KEY_PAGE.META_MASK){
        Metamask.refreshMeta()
      }
    }
    initWeb3()

  }, [connectionMethod]);
  return (
    children
  )
}

export default Web3Provider
