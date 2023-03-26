import { KEY_PAGE } from '../Lib/constants'
import initState from '../Lib/initState'
import createReducer from '../Lib/reducerConfig'
import MessageEN from '@/static/asset/lang/en.json'
import MessageVN from '@/static/asset/lang/vn.json'
const localeEN = {
  lang: 'en',
  messages: MessageEN
}
const localeVN = {
  lang: 'vn',
  messages: MessageVN
}

export const locale = createReducer(localeVN, {
  [KEY_PAGE.SET_LOCALE] (state, action) {
    return localeVN
    // switch (action.payload) {
    // case 'en':
    //   return localeEN
    // case 'ja':
    //   return localeJA
    // case 'cn':
    //   return localeCN
    // case 'vn':
    //   return localeVN
    // case 'ko':
    //   return localeKO
    // default:
    //   return localeEN
    // }
  }
})
export const internetRedux = createReducer(initState.internet, {
  [KEY_PAGE.SET_INTERNET](state, action) {
    return action.payload
  }
})

export const metamaskRedux = createReducer(initState.metamaskRedux, {
  [KEY_PAGE.SET_METAMASK_INFO](state, action) {
    return action.payload
  }
})

export const balanceRedux = createReducer(initState.balanceRedux, {
  [KEY_PAGE.SET_BALANCE](state, action) {
    return action.payload
  }
})
export const connectionMethod = createReducer(initState.connectionMethod, {
  [KEY_PAGE.CONNECTION_METHOD](state, action) {
    return action.payload
  }
})

export const bnbPriceRedux = createReducer(initState.bnbPriceRedux, {
  [KEY_PAGE.SET_BNB_PRICE](state, action) {
    return action.payload
  }
})
export const globalModal = createReducer(initState.openModal, {
  [KEY_PAGE.MODAL_GLOBAL](state, action) {
    return action.payload
  }
})

export const isSigned = createReducer(initState.isSign, {
  [KEY_PAGE.SET_SIGN](state, action) {
    return action.payload
  }
})

