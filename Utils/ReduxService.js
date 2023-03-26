import PageReduxAction from '@/Redux/Action/pageAction';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import storeRedux from '@/Redux/Store/configureStore';
import initState from'@/Redux/Lib/initState'
import { removeDataLocal } from './function';
const ReduxService = {
  callDispatchAction: (action) => {
    storeRedux.dispatch(action)
  },
  setBnbBalance: (bnbBalance = 100) => {
    ReduxService.callDispatchAction(PageReduxAction.setBalance(bnbBalance))
  },
  setIsSign: (isSign = false) => {
    ReduxService.callDispatchAction(PageReduxAction.setIsSign(isSign))
  },
  setBnbPrice: (price) => {
    ReduxService.callDispatchAction(PageReduxAction.setBnbPrice(price))
  },
  setMetamask: (metaMask) => {
    ReduxService.callDispatchAction(PageReduxAction.setMetamask(metaMask))
  },
  getMetamask: () => {
    const { metamaskRedux } = storeRedux.getState()
    return metamaskRedux
  },
  setConnectionMethod: async (method = KEY_PAGE.META_MASK) => {
    ReduxService.callDispatchAction(PageReduxAction.setConnectionMethod(method))
  },
  getConnectionMethod: () => {
    const { connectionMethod } = storeRedux.getState()
    return connectionMethod
  },
  openModal: (props, params) => {
    ReduxService.callDispatchAction(PageReduxAction.setGlobalModal({ ...props, ...params, show: true }))
  },
  resetUser:async () => {
    removeDataLocal('wallet_connect_session')
    Promise.all[
      removeDataLocal(KEY_PAGE.SET_METAMASK_INFO),
      ReduxService.setMetamask(initState.metamaskRedux),
      ReduxService.setConnectionMethod(null),
      ReduxService.setIsSign(false)
    ]
  },
  getChainId: () => {
    const { metamaskRedux } = storeRedux.getState()
    return metamaskRedux.chainId
  },
  closeModal: () => {
    ReduxService.callDispatchAction(PageReduxAction.setGlobalModal({ show: false }))
  }

}
export default ReduxService;
