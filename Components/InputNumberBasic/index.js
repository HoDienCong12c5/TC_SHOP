import React from 'react'
import styled from 'styled-components';
import { InputNumber } from 'antd';

const InputCustom = styled(InputNumber)`
  
`;
const InputNumberBasic = ({
  value,
  min = -999999999999999,
  max = 999999999999999,
  onChange,
  ...props
}) => {
  return (
    <InputCustom
      min={min}
      max={max} defaultValue={value ?? 0}
      onChange={onChange}
      {...props}
    />
  )
}

export default InputNumberBasic
