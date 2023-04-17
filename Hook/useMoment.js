import moment from 'moment'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

const useMoment = () => {
  const language = useSelector(state => state.locale.lang)

  return useMemo(() => {
    if (language === 'vn') {
      moment.locale('vi')
      return moment
    }
    if (language === 'cn') {
      moment.locale('zh-cn')
      return moment
    }
    moment.locale(language)
    return moment
  }, [language])
}

export default useMoment
