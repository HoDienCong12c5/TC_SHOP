import { modalConfig, PAGE_SIGN } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import { useWorkModal } from '@/Hook/useModal'
import userUserInfo from '@/Hook/useUserInfor'
import ReduxService from '@/Utils/ReduxService'
import { DownOutlined } from '@ant-design/icons'
import { Col, Dropdown, Row, Space } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Media from 'react-media'
import { useSelector } from 'react-redux'
import ModalLogin from './component/ModalLogin'
import NavDesktop from './component/NavDesktop'
import styles from './Header.module.scss'
import { ContainerHeader } from './styled'

const Header = () => {
  const router = useRouter()
  const {isSigned,name} = userUserInfo()
  const {showModal} = useWorkModal()
  const message = useSelector(state => state.locale.messages)
  useEffect(() => {
    if(!isSigned){
      if(PAGE_SIGN.includes(router.asPath)){
        ReduxService.resetUser()
      }
    }
  }, [router,isSigned])
  useEffect(() => {
    if(!isSigned){
      if(PAGE_SIGN.includes(router.asPath)){
        ReduxService.resetUser()
      }
    }
  }, [router,isSigned])

  const connectMeta = async () => {
    // Metamask.initialize()
    showModal({
      body:<ModalLogin />,
      modalConfig
    })
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
    return (
      <Row justify={'center'} align={'middle'} style={{height:'100%'}}>
        <Col span={4} style={{ textAlign: 'start' }}>
          <Link href={'/'}>
            <Image
              src={'https://skywalker.infura-ipfs.io/ipfs/QmfSbEq4qrQn53YydFj59Saiz9issKWFuxEJS4hDTCnNzh'}
              width={50}
              height={50}
              alt="TC Shop"
            />
          </Link>
        </Col>
        <Col span={16}>
          <NavDesktop />

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
                    {name}
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
export async function getStaticProps() {
  return {
    props:{
      data:null
    }
  }
}
export default Header
