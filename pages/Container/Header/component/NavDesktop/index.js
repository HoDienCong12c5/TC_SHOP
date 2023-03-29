import ButtonBasic from '@/Components/ButtonBasic';
import MyMenu from '@/Components/MyMenu';
import userUserInfo from '@/Hook/useUserInfor';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../Header.module.scss'

const NavDesktop = () => {
  const [listMenuNav, setListMenuNav] = useState([])

  const router = useRouter()
  const {isSigned} = userUserInfo()
  const messages = useSelector(state=>state.locale.messages)

  useEffect(() => {
    const initMenuNav = () => {
      const arrNav = [
        {
          label: (
            <ButtonBasic
              onClick={() => router.push('/CoffeeShop')}
              className={styles['btn-item-menu']}
            >
              {messages.header.coffee}
            </ButtonBasic>
          ),
          key: 'coffee',
        },
        {
          label: (
            <ButtonBasic
              onClick={() => router.push('/PodShop')}
              className={styles['btn-item-menu']}
            >
              {messages.header.pod}
            </ButtonBasic>
          ),
          key: 'pod',
        },
        {
          label: (
            <ButtonBasic
              onClick={() => router.push('/About')}
              className={styles['btn-item-menu']}
            >
              {messages.header.about}
            </ButtonBasic>
          ),
          key: 'about',
        },
        {
          label: (
            <ButtonBasic
              onClick={() => router.push('/Contact')}
              className={styles['btn-item-menu']}
            >
              {messages.header.contact}
            </ButtonBasic>
          ),
          key: 'contact',
        },
      ]
      if (!isSigned) {
        arrNav.push({
          label:(
            <ButtonBasic
              onClick={() => router.push('/Register')}
              className={styles['btn-item-menu']}
            >
              {messages.register.title}
            </ButtonBasic>
          ),
          key: 'register',
        })
      }else{
        arrNav.push({
          label:(
            <ButtonBasic
              onClick={()=> router.push('/MyCart')}
              className={styles['btn-item-menu']}
            >
              {messages.header.cart}
            </ButtonBasic>
          ),
          key: 'register',
        })

      }

      setListMenuNav(arrNav)
    }
    initMenuNav()
  }, [isSigned])

  return (
    <MyMenu mode="horizontal" items={listMenuNav}/>
  )
}

export default NavDesktop
