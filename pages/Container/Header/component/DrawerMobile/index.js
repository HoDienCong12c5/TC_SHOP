import { Drawer } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { H1Custom } from '../NavDesktop'
import ButtonBasic from '@/Components/ButtonBasic'
import userUserInfo from '@/Hook/useUserInfor'
import { useRouter } from 'next/router'
import styles from '../../Header.module.scss';
import { useEffect } from 'react'
import ReduxService from '@/Utils/ReduxService'
const listMeu = [
  {
    route:'/CoffeeShop',
    text:'coffee'
  },
  {
    route:'/podShop',
    text:'pod'
  },
  {
    route:'/Contact',
    text:'contact'
  }
]
const DrawerMobile = ({value,callBack}) => {
  const messages = useSelector(state => state.locale.messages)
  const router = useRouter();
  const { isSigned,isAdmin } = userUserInfo();
  useEffect(() => {

  }, [])

  const onClickItem = (route) => {
    router.push(route)
    callBack()
  }
  return (
    <Drawer placement="right" onClose={callBack} open={value}>
      {
        listMeu.map(menuItem=>{
          return <H1Custom key={menuItem + 'H1Custom'}>
            <ButtonBasic
              onClick={() => onClickItem(menuItem.route)}
              className={styles['btn-item-menu']}
            >
              {messages.header[`${menuItem.text}`]}
            </ButtonBasic>
          </H1Custom>
        })
      }
      <H1Custom key={'logout'} style={{color:'red'}}>
        <ButtonBasic
          textColor='blue'
          onClick={() => ReduxService.resetUser()}
          className={styles['btn-item-menu']}
        >
          {messages.common.logOut}
        </ButtonBasic>
      </H1Custom>
    </Drawer>
  )
}

export default DrawerMobile
