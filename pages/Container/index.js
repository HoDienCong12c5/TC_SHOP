import MyModal from '@/Components/MyModal';
import { Affix, Col, Layout, Row } from 'antd';
import Header from './Header';
import SEO from './Header/seo';
import '@/Services/FirebaseService';
import Footer from './Footer';
const { Content } = Layout
const Container = ({ children }) => {
  return (
    <Layout style={{background:'transparent'}} >
      <Affix className='affix-header' style={{ zIndex: 100 }} offsetTop={0}>
        <Header />
      </Affix>

      <Content className='base-content' style={{ paddingTop: 10 }}>
        <Row type='flex' justify='center'>
          <Col span={24}>
            <div className='base-container'>{children}</div>
          </Col>
        </Row>
      </Content>
      {/* <Footer /> */}
      <MyModal />

    </Layout>

  )
}

export default Container
