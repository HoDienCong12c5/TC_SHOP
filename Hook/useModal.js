import ReduxService from '@/Utils/ReduxService'
import { useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

export const useModal = () => {
  return {
    modal: useSelector(state => state.globalModal, shallowEqual)
  }
}
export const useWorkModal = props => {
  const dispatch = useDispatch()
  const showModal = useCallback(
    (params = {}) => {
      ReduxService.openModal(props, params)
    },
    [props, dispatch]
  )
  const hideModal = useCallback(() => {
    ReduxService.closeModal()
  }, [dispatch])
  return {
    showModal,
    hideModal
  }
}
export const useShowModal = props => {
  const dispatch = useDispatch()
  const showModal = useCallback(
    (params = {}) => {
      ReduxService.openModal(props, params)
    },
    [props, dispatch]
  )

  return showModal
}

export const useHideModal = () => {
  const dispatch = useDispatch()
  const hideModal = useCallback(() => {
    ReduxService.closeModal()
  }, [dispatch])

  return hideModal
}

