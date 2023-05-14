import { BG_BTN } from '@/common/constant'
import ButtonBasic from '@/Components/ButtonBasic'
import { MediumText } from '@/Components/TextSize'
import { useWorkModal } from '@/Hook/useModal'
import { FormItem, InputForm } from '@/pages/CoffeeShop/styled'
import { numberWithCommas } from '@/Utils/function'
import { Col, Form, Row } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ConFormModalBuyCoffee, ConModalBuyCoffee, TitleModalBuyCoffee } from './styled'
const ModalBuyCoffe = ({
  coffee,
  number = 1
}) => {
  const {hideModal} = useWorkModal()
  const [form] = Form.useForm()
  const message = useSelector(state => state.locale.messages)

  const [formData, setFormData] = useState({
    address:'',
    numberPhone:'',
    gmail:'',
    linkMess:'',
    fullName:'',
  });
  const buyCoffee = () => {

  }

  const checkNameUser = (rule, nameUser) => {
    if(!nameUser){
      return Promise.reject(message.warning.errorUserName)
    }
  }
  const checkSDT = (rule, sdt) => {
    if(!sdt){
      return Promise.reject(message.warning.errorSDT)
    }else{
      if(sdt.length < 9 || sdt.length > 10){
        return Promise.reject(message.warning.errorSDT)
      }
    }

  }
  const checkAddress = (rule,address) => {
    if(!address){
      return Promise.reject(message.warning.errorAddress)
    }

  }
  const checkLinkFace = (linkFace) => {
    console.log('====================================');
    console.log({linkFace});
    console.log('====================================');

  }
  const checkGmail = (gmail) => {
    console.log('====================================');
    console.log({gmail});
    console.log('====================================');

  }
  return (
    <ConModalBuyCoffee>
      <TitleModalBuyCoffee >
        {message.coffeeDetail.modalBuy.titleOder}
      </TitleModalBuyCoffee>
      <MediumText>
        {`${message.textPopular.nameProduct}: ${coffee?.name}`}
      </MediumText>
      <div className='flex' >
        <MediumText fontWeight={500} color={'green'}>
          {`${message.textPopular.totalMoney}`}
        </MediumText>
        <MediumText fontWeight={500} color={'green'}>
          {`:  ${number} * ${numberWithCommas(coffee?.price ?? 0)} = ${numberWithCommas((coffee?.price ?? 0) * number)} VND`}
        </MediumText>
      </div>

      <ConFormModalBuyCoffee>
        <Form
          name="basicform"
          form={form}
          initialValues={formData}
          style={{ width: '100%' }}
          onValuesChange={(changedValues, allValue) => setFormData(allValue)}
        >
          <FormItem
            name={'fullName'}
            rules={[{ validator: checkNameUser }]}
            label={message.coffeeDetail.modalBuy.enterName}
            style={{ width: '90%' }}
          >
            <InputForm placeholder={message.coffeeDetail.modalBuy.enterName} />
          </FormItem>
          <FormItem
            name={'numberPhone'}
            rules={[{ validator: checkSDT }]}
            label={message.coffeeDetail.modalBuy.enterNumberPhone}
            style={{ width: '90%' }}
          >
            <InputForm type='number' autoComplete='off' />
          </FormItem>
          <FormItem
            name={'address'}
            rules={[{ validator: checkAddress }]}
            label={message.coffeeDetail.modalBuy.enterAddress}
            style={{ width: '90%' }}
          >
            <InputForm placeholder={message.coffeeDetail.modalBuy.enterAddress} />
          </FormItem>
          <FormItem
            name={'linkMess'}
            label={message.coffeeDetail.modalBuy.enterLinkFace}
            style={{ width: '90%' }}
          >
            <InputForm placeholder={message.coffeeDetail.modalBuy.enterLinkFace} />
          </FormItem>
          <FormItem
            name={'gmail'}
            label={message.coffeeDetail.modalBuy.enterName}
            style={{ width: '90%' }}
          >
            <InputForm placeholder={message.coffeeDetail.modalBuy.enterName} />
          </FormItem>
        </Form>
      </ConFormModalBuyCoffee>

      <Row>
        <Col span={11}>
          <ButtonBasic className={'w-full'} onClick={buyCoffee} >
            {message.common.submit}
          </ButtonBasic>
        </Col>
        <Col span={11}offset={1}>
          <ButtonBasic className={'w-full btn-close'} onClick={hideModal} >
            {message.common.close}
          </ButtonBasic>
        </Col>
      </Row>
    </ConModalBuyCoffee>
  )
}

export default ModalBuyCoffe
