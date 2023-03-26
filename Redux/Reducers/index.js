import * as pageReducers from './pageReducers'

import { getDataLocal } from '@/Utils/function'
import { combineReducers } from 'redux'
export const checkLocalStoreToRedux = (storeRedux, keyStoreNew, action, initData) => {
  return new Promise((resolve, reject) => {
    try {
      let data = getDataLocal(keyStoreNew)
      if (data) {
        data !== initData && storeRedux.dispatch(action(data))
      }
      resolve()
    } catch (error) {
      return resolve()
    }
  })
}

const rootReducer = combineReducers({
  ...pageReducers
})

export default rootReducer
