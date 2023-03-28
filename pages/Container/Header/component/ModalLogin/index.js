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
import { useWorkModal } from '@/Hook/useModal';
import userUserInfo from '@/Hook/useUserInfor';
import { showNotification } from '@/Utils/function';

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
const ModalLogin = () => {
  const route = useRouter()
  const [form] = Form.useForm()
  const {hideModal} = useWorkModal()
  const {isSigned} = userUserInfo()
  const message = useSelector(state => state.locale.messages)
  const modal = useSelector(state => state.globalModal)

  const [saveLogin, setSaveLogin] = useState(true)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [formData, setFormData] = useState({
    userName :'',
    passWord:''
  });
  useEffect(() => {
    if(isSigned && modal.show){
      hideModal()
    }

    return ()=>{setLoadingLogin(false)}
  }, [isSigned,modal])
  const handleLogin = async () => {
    let login = false
    setLoadingLogin(true)
    if(saveLogin){
      login = await ReduxService.getUserInfo(formData.userName,formData.passWord,true)

    }else{
      login = await ReduxService.getUserInfo(formData.userName,formData.passWord)
    }
    console.log('====================================');
    console.log({login});
    console.log('====================================');
    if(!login){
      hideModal()
      showNotification('user name hoặc password chưa đúng')
    }
  }
  const onRememberLogin = () => {
    setSaveLogin(!saveLogin)
  }

  return (
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
            password
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
            onClick={hideModal} >
            {message.common.close}
          </ButtonBasic>
        </Col>
      </Row>
    </ContentLogin>
  )
}

export default ModalLogin
