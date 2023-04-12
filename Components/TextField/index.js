import { Checkbox, Form } from 'antd';
import React from 'react'
import styled from 'styled-components';
import MyInput from '../MyInput';
import { Case, Default, Switch } from 'react-if'
const ContainerFormItem = styled.div`
  width: 100%;
`
export const FormItem = styled(Form.Item)`
.ant-form-item-row{
  .ant-form-item-control{
    width: 100% !important;
    flex: none;
    min-width: 100%; 
  }
}
`
export const InputForm = styled(MyInput)`
height: 30px;
`
const TextField = ({
  label = '',
  placeholder = '',
  value,
  name,
  rule = null,
  typeRule = 'text',
  classNFormItem,
  classNInput
}) => {
  return (
    <ContainerFormItem>
      <FormItem
        className={classNFormItem}
        name={name}
        rules={[{ validator: rule }]}
        label={label}
        style={{ width: '100%' }}
        valuePropName={typeRule === 'checkBox' ? 'checked' : 'text'}
      >
        <Switch >
          <Case condition={typeRule === 'text'}>
            <InputForm className={classNInput} placeholder={placeholder ?? label} />
          </Case>
          <Case condition={typeRule === 'number'}>
            <InputForm className={classNInput} type={'number'} placeholder={placeholder ?? label} />
          </Case>
          <Case condition={typeRule === 'checkBox'}>
            <Checkbox
              className={classNInput}
              checked={value}
            />
          </Case>
        </Switch>
      </FormItem>
    </ContainerFormItem>
  )
}

export default TextField
