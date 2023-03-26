import FirebaseService from '@/Services/FirebaseService'
import ReduxService from '@/Utils/ReduxService'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const useUserData = () => {
  const [idUser, setIdUser] = useState(null)
  const metamaskRedux = useSelector(state => state.metamaskRedux)
  const isSigned = useSelector(state => state.isSigned)
  useEffect(() => {
    const getIdUser = async () => {
      const user = await FirebaseService.storeCrossTech.getDataByAddress(metamaskRedux?.address)
      user?.length > 0 && setIdUser(user[0].id)
    }
    if (metamaskRedux?.address && metamaskRedux?.address !== '') {
      ReduxService.setIsSign(true)
      getIdUser()
    }
  }, [metamaskRedux])
  return {
    isSigned: isSigned,
    userAddress: metamaskRedux?.address ?? '',
    idUser: idUser,
    chainId: metamaskRedux?.chainId ?? ''
  }
}

export default useUserData
