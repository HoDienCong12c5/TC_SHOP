import ButtonBasic from '@/Components/ButtonBasic';
import MyInput from '@/Components/MyInput';
import ReduxService from '@/Utils/ReduxService';
import { Checkbox, Col, Form, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Observer from '@/Utils/Observer'
import { OBSERVER_KEY } from '@/common/constant';

const ContainerLogin = styled.div`
  width: 100%;
  height:calc(100vh - 60px);
  text-align: center;
  align-items: center;
  justify-content: center;
    align-self: end;
    align-content: center;
    position: relative;
    display: flex;
    flex-direction: column;
`;
const ContentLogin = styled.div`
  display: flex;
  width: 500px;
  flex-direction: column;
  /* height: 500px; */
  gap:10px;
  margin: auto;
  padding:16px;
  background:white;
  border-radius: 16px;
`;
const InputForm = styled(MyInput)`
height: 30px;
`
const Login = () => {
  const route = useRouter()
  const [form] = Form.useForm()
  const message = useSelector(state => state.locale.messages)

  const [saveLogin, setSaveLogin] = useState(true)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [formData, setFormData] = useState({
    userName :'',
    passWord:''
  });
  useEffect(() => {
    Observer.on(OBSERVER_KEY.LOGIN,()=>route.push('/'))
    return ()=>{Observer.removeListener(OBSERVER_KEY.LOGIN,()=>{})}
  }, [])
  const handleLogin = () => {
    setLoadingLogin(true)
    if(saveLogin){
      ReduxService.getUserInfo(formData.userName,formData.passWord,true)
    }else{
      ReduxService.getUserInfo(formData.userName,formData.passWord)
    }
  }
  const onRememberLogin = () => {
    setSaveLogin(!saveLogin)
  }

  return (
    <ContainerLogin >
      <ContentLogin >
        <Form
          name="basicform"
          form={form}
          initialValues={formData}
          style={{ width: '100%' }}
          onValuesChange={(changedValues, allValue) => setFormData(allValue)}
        >
          <Form.Item
            name={'userName'}
            label={message.coffeeDetail.modalBuy.enterName}
          >
            <InputForm
              placeholder={message.coffeeDetail.modalBuy.enterName}
            />
          </Form.Item>
          <Form.Item

            name={'passWord'}
            label={message.coffeeDetail.modalBuy.enterName}
          >
            <InputForm
              placeholder={message.coffeeDetail.modalBuy.enterName}
            />
          </Form.Item>
        </Form>
        <Checkbox checked={saveLogin} onChange={onRememberLogin}>{message.register.saveRegister}</Checkbox>
        <Row className={'mt-15'} >
          <Col span={11}>
            <ButtonBasic
              loading={loadingLogin}
              className={'w-full'}
              onClick={handleLogin}
            >
              {message.common.submit}
            </ButtonBasic>
          </Col>
          <Col span={11}offset={1}>
            <ButtonBasic
              className={'w-full btn-close'}
              onClick={()=>route.push('/')} >
              {message.common.close}
            </ButtonBasic>
          </Col>
        </Row>
      </ContentLogin>
    </ContainerLogin>
  )
}

export default Login
