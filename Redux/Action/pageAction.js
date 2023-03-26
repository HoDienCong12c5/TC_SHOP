import { saveDataLocal } from '@/Utils/function';
import { KEY_PAGE } from '../Lib/constants';

export default class PageReduxAction {
  static setInternet(payload) {
    return {
      type: KEY_PAGE.SET_INTERNET,
      payload
    }
  }
  static setLocale (payload) {
    saveDataLocal(KEY_PAGE.SET_LOCALE, payload)
    return {
      type: KEY_PAGE.SET_LOCALE,
      payload
    }
  }

  static setMetamask(payload) {
    saveDataLocal(KEY_PAGE.SET_METAMASK_INFO, payload)
    return {
      type: KEY_PAGE.SET_METAMASK_INFO,
      payload
    }
  }
  static setBalance(payload) {
    return {
      type: KEY_PAGE.SET_BALANCE,
      payload
    };
  }
  static setBnbPrice(payload) {
    return {
      type: KEY_PAGE.SET_BNB_PRICE,
      payload
    };
  }
  static setConnectionMethod(payload) {
    saveDataLocal(KEY_PAGE.CONNECTION_METHOD, payload)
    return {
      type: KEY_PAGE.CONNECTION_METHOD,
      payload
    };
  }
  static setGlobalModal(payload) {
    return {
      type: KEY_PAGE.MODAL_GLOBAL,
      payload
    };
  }
  static setIsSign(payload) {
    return {
      type: KEY_PAGE.SET_SIGN,
      payload
    };
  }
}
