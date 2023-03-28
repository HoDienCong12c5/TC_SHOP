import { Affix, Col, Layout, Row } from 'antd';
import Header from './Header';
import SEO from './Header/seo';
import '@/Services/FirebaseService';
import dynamic from 'next/dynamic'
const MyModal = dynamic(()=>import('@/Components/MyModal'))
import Footer from './Footer';
import { useMemo,memo } from 'react';
import { PAGE_NO_HEADER_FOOTER } from '@/common/constant';
import { useRouter } from 'next/router';
const { Content } = Layout
const Container = ({ children }) => {
  const router = useRouter()
  const isShowHeaderFooter = useMemo(() => {
    const pathName = router.pathname
    if(PAGE_NO_HEADER_FOOTER.includes(pathName)){
      return false
    }
    return true
  },[router])
  const modalComponent = useMemo(() => <MyModal />, []);
  return (
    < >{
      isShowHeaderFooter && (
        <Affix className='affix-header' style={{ zIndex: 100 }} offsetTop={0}>
          <Header />
        </Affix>
      )
    }


    <Content className='base-content' style={{ paddingTop: 10 }}>
      <Row type='flex' justify='center'>
        <Col span={24}>
          <main className='base-container'>{children}</main>
        </Col>
      </Row>
    </Content>
    {
      isShowHeaderFooter && <Footer />
    }

    {modalComponent}

    </>

  )
}

export default Container
