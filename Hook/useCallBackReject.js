import { isErrorRpc, isNotEnoughGas, isUserDeniedTransaction, showNotification } from '@/Utils/function'
import { useWorkModal } from './useModal'

const useCallBackReject = () => {
  const { hideModal} = useWorkModal()

  //   const messages = useSelector( ( state ) => state.locale.messages )
  const callbackRejected = (err) => {
    hideModal()
    if (!isNotEnoughGas(err)) {
      if (isUserDeniedTransaction(err)) {
        showNotification('messages.errors.deniedTransaction')
      } else {
        if (isErrorRpc(err)) {
          showNotification('messages.errors.changeRpc')
        } else {
          showNotification('messages.errors.somethingWrong')
        }
      }
    } else {
      showNotification('messages.errors.notEnoughGas')
    }
  }
  return {
    callbackRejected
  }
}
export default useCallBackReject
