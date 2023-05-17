import { Form, Input } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { NormalText } from '../TextSize';
const InputCustom = styled(Input)`
  
`;
const FormItem = styled(Form.Item)`
  
`;
const TextFieldForm = ({
  onChange = null,
  name,
  label,
  error = null,
  type = 'string',
  ...props
}) => {
  return (
    <FormItem label={label} name={name} {...props} >
      <InputCustom type={type} onChange={(value)=>onChange ? onChange(value.target.value) : {}}/>
      {
        error && <NormalText color='red'>{error}</NormalText>
      }
    </FormItem>
  )
}

export default TextFieldForm
