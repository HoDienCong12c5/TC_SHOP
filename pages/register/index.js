import { TitleText } from '@/Components/TextSize'
import { useWorkModal } from '@/Hook/useModal'
import { Col, Form, Row,Checkbox } from 'antd'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { ContainerRegister } from './styled'
import { InputForm } from '@/pages/CoffeeShop/styled'
import ButtonBasic from '@/Components/ButtonBasic'
import { useRouter } from 'next/router'
import useUserData from '@/Hook/useUserData'
import userUserInfo from '@/Hook/useUserInfor'

const Register = () => {
  const route = useRouter()
  const {hideModal} = useWorkModal()
  const {isSigned} = userUserInfo()
  const [form] = Form.useForm()
  const message = useSelector(state => state.locale.messages)

  const [saveLogin, setSaveLogin] = useState(true)
  const [formData, setFormData] = useState({
    userName :'',
    passWord:'',
    passWordAgain:'',
    numberPhone:''
  });

  useEffect(() => {
    if(isSigned){
      route.push('/')
    }
  }, [isSigned])

  const checkValidRegister = useMemo(() => {
    for (const key in formData) {
      if(formData[key] === '' || !formData[key]){
        return false
      }
    }
    return true
  },[formData])
  const checkUserName = (rule, userName) => {
    if(!userName){
      return Promise.reject(message.warning.errorUserName)
    }
  }
  const checkNumberPhone = (rule, numberPhone) => {
    if(!numberPhone){
      return Promise.reject(message.warning.errorSDT)
    }else{
      if(numberPhone.length < 9 || numberPhone.length > 10){
        return Promise.reject(message.warning.errorSDT)
      }
    }
  }
  const checkPWAgin = (rule, passWordAgain) => {
    if(formData.passWord !== passWordAgain){
      return Promise.reject(message.warning.inValidPassWordAgain)
    }
  }
  const onRememberLogin = (e) => {
    setSaveLogin(!saveLogin)
  };
  const submit = (params) => {

  }


  return (
    <ContainerRegister>
      <TitleText textTransform style={{margin:'auto'}}>
        {message.register.title}
      </TitleText>
      <Form
        name="basicform"
        form={form}
        initialValues={formData}
        style={{ width: '100%' }}
        onValuesChange={(changedValues, allValue) => setFormData(allValue)}
      >
        <Form.Item
          rules={[{validator:checkUserName}]}
          name={'userName'}
          label={message.coffeeDetail.modalBuy.enterName}
        >
          <InputForm
            placeholder={message.coffeeDetail.modalBuy.enterName}
          />
        </Form.Item>
        <Form.Item
          rules={[{validator:checkNumberPhone}]}
          name={'numberPhone'}
          label={message.coffeeDetail.modalBuy.enterNumberPhone}
        >
          <InputForm placeholder={message.coffeeDetail.modalBuy.enterNumberPhone} />
        </Form.Item>
        <Form.Item
          name={'passWord'}
          label={message.register.enterPassWord}
        >
          <InputForm placeholder={message.register.enterPassWord} />
        </Form.Item>
        <Form.Item
          rules={[{validator:checkPWAgin}]}
          name={'passWordAgain'}
          label={message.register.enterPassWordAgain}
        >
          <InputForm placeholder={message.register.enterPassWordAgain} />
        </Form.Item>
      </Form>
      <Checkbox checked={saveLogin} onChange={onRememberLogin}>{message.register.saveRegister}</Checkbox>
      <Row className={'mt-15'} >
        <Col span={11}>
          <ButtonBasic
            disabled={!checkValidRegister}
            className={'w-full'}
            onClick={submit}
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
    </ContainerRegister>
  )
}

export default Register
