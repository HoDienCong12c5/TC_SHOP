
import { REACT_QUERY } from '@/common/constant'
import FirebaseService from '@/Services/FirebaseService'
import { useQuery } from '@tanstack/react-query'
import userUserInfo from './useUserInfor'
const getAllData = async({ queryKey })=>{
  const idUser = queryKey[1]

  const data = await FirebaseService.cart.getDataByQuery('idUser','==',idUser)

  return data
}

const useGetAllCart = () => {
  const {idUser} = userUserInfo()
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY.GET_ALL_CART,idUser],
    getAllData,
  )

  return {
    listAllCart:data,
    loadingAllCart:isLoading,
    errorAllCart:error
  }
}

export default useGetAllCart
