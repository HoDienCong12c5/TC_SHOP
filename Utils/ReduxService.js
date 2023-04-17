import PageReduxAction from '@/Redux/Action/pageAction';
import { KEY_PAGE } from '@/Redux/Lib/constants';
import storeRedux from '@/Redux/Store/configureStore';
import initState from'@/Redux/Lib/initState'
import Observer from '@/Utils/Observer'
import { removeDataLocal, saveDataLocal } from './function';
import FirebaseService from '@/Services/FirebaseService';
import { OBSERVER_KEY } from '@/common/constant';
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

    Promise.all[
      removeDataLocal('wallet_connect_session'),
      removeDataLocal(KEY_PAGE.SET_USER_INFO),
      removeDataLocal(KEY_PAGE.SET_METAMASK_INFO),
      ReduxService.setMetamask(initState.metamaskRedux),
      ReduxService.callDispatchAction(PageReduxAction.setUserInfo(null)),
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
  },
  getUserInfo:async (userName, passWord, saveLogin = false) => {
    return new Promise(async(resolve,reject)=>{
      const dataUser = await FirebaseService.user.getAllData()
      if(dataUser?.length > 0){
        dataUser.forEach(user=>{
          if(user.userName === userName && user.pass === passWord){
            console.log({user});
            ReduxService.callDispatchAction(PageReduxAction.setUserInfo(user))
            saveLogin && saveDataLocal(KEY_PAGE.SET_USER_INFO, user)
            Observer.emit(OBSERVER_KEY.LOGIN)
            resolve(true)
          }
        })
      }
      reject(false)
    })

  }

}
export default ReduxService;
