import ButtonBasic from '@/Components/ButtonBasic';
import MyInput from '@/Components/MyInput';
import ReduxService from '@/Utils/ReduxService';
import { Checkbox, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useWorkModal } from '@/Hook/useModal';
import userUserInfo from '@/Hook/useUserInfor';
import { showNotification } from '@/Utils/function';

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
  const [form] = Form.useForm()
  const {hideModal} = useWorkModal()
  const {isSigned} = userUserInfo()
  const message = useSelector(state => state.locale.messages)
  const modal = useSelector(state => state.globalModal)

  const [saveLogin, setSaveLogin] = useState(true)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [formData, setFormData] = useState({
    numberPhone :'',
    passWord:''
  });
  useEffect(() => {
    if(isSigned && modal.show){
      hideModal()
    }

    return ()=>{setLoadingLogin(false)}
  }, [isSigned])
  const handleLogin = async () => {
    let login = false
    setLoadingLogin(true)
    if(saveLogin){
      login = await ReduxService.getUserInfo(formData.numberPhone,formData.passWord,true)

    }else{
      login = await ReduxService.getUserInfo(formData.numberPhone,formData.passWord)
    }
    if(!login){
      hideModal()
      showNotification('user name hoặc password chưa đúng')
    }
    setLoadingLogin(false)
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
          name={'numberPhone'}
          label={message.coffeeDetail.modalBuy.enterNumberPhone}
        >
          <InputForm
            placeholder={message.coffeeDetail.modalBuy.enterNumberPhone}
          />
        </Form.Item>
        <Form.Item

          name={'passWord'}
          label={message.register.enterPassWord}
        >
          <InputForm
            password
            placeholder={message.register.enterPassWord}
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
