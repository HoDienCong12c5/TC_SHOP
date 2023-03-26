import { modalConfig, PAGE_SIGN } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import ModalTx from '@/Components/ModalTx'
import useCallBackReject from '@/Hook/useCallBackReject'
import { useWorkModal } from '@/Hook/useModal'
import useUserData from '@/Hook/useUserData'
import Metamask from '@/Modal/Metamask'
import { ellipsisAddress } from '@/Utils/function'
import ReduxService from '@/Utils/ReduxService'
import Web3Service from '@/Utils/web3'
import { DownOutlined } from '@ant-design/icons'
import { Col, Dropdown, Row, Space } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Media from 'react-media'
import { useSelector } from 'react-redux'
import styles from './Header.module.scss'
import { ContainerHeader } from './styled'
const Header = () => {
  const router = useRouter()
  const { isSigned, userAddress } = useUserData()
  const modal = useSelector(state => state.globalModal)
  const message = useSelector(state => state.locale.messages)
  useEffect(() => {
    if(!isSigned){
      if(PAGE_SIGN.includes(router.asPath)){
        ReduxService.resetUser()
      }
    }
  }, [router,isSigned])

  const connectMeta = async () => {
    Metamask.initialize()
  }
  const handleMyProfile = () => {
    router.push('/MyProfile')
  }
  const sendToken = () => {
    router.push('/MyProfile')
  }
  const minNFT = () => {
    if (isSigned) {
      router.push('/MintNFT')
    } else {
      connectMeta()
    }
  }

  const handleSignOut = async () => {
    ReduxService.resetUser()
  }

  const renderDesktop = () => {
    const items = [
      {
        key: '1',
        label: (
          <div onClick={handleSignOut}>
            {message.textPopular.logOut}
          </div>
        )
      }
    ]
    const dataNav = [
      {
        tile:message.header.coffee,
        route:'/coffee-shop'
      },
      {
        tile:message.header.pod,
        route:'/pod-shop'
      },
      {
        tile:message.header.contact,
        route:'/contact'
      },
      {
        tile:message.header.about,
        route:'/about'
      }
    ]
    return (
      <Row justify={'center'} align={'middle'} style={{height:'100%'}}>
        <Col span={4} style={{ textAlign: 'start' }}>
          <Link href={'/'}>
            <img
              src={'https://skywalker.infura-ipfs.io/ipfs/QmfSbEq4qrQn53YydFj59Saiz9issKWFuxEJS4hDTCnNzh'}
              style={{height:50}}
            />
          </Link>
        </Col>
        <Col span={16}>
          <Row align={'middle'}>
            {
              dataNav.map(menu=>(
                <ButtonBasic
                  key={menu}
                  onClick={()=> router.push(menu.route)}
                  className={styles['btn-item-menu']}
                >
                  {menu.tile}
                </ButtonBasic>
              ))
            }
            {
              isSigned && (
                <ButtonBasic
                  onClick={()=> router.push('/cart')}
                  className={styles['btn-item-menu']}
                >
                  {message.header.cart}
                </ButtonBasic>
              )
            }

          </Row>

        </Col>
        <Col span={4} style={{ textAlign: 'end' }}>
          {
            isSigned ? (
              <Dropdown
                menu={{items,}}
                trigger={['click']}
                className={'hover'}
              >
                <ButtonBasic className={styles['bnt-login']} style={{ background: '#f5f5f5', borderRadius: 0, border: '1px solid; black' }}>
                  <Space>
                    {ellipsisAddress(userAddress, 5, 4)}
                    <DownOutlined />
                  </Space>
                </ButtonBasic>
              </Dropdown>
            ) : (
              <ButtonBasic
                style={{ background: '#f5f5f5', borderRadius: 0, border: '1px solid; black' }}
                onClick={connectMeta}
                className={styles['bnt-login']}
              >
                {message.common.login}
              </ButtonBasic>
            )
          }
        </Col>
      </Row>
    )
  }
  const renderMobile = () => {
    return (<></>)
  }
  return (
    <ContainerHeader>
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHeader>
  )
}

export default Header
