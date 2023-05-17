import { formatDateTime } from '@/Utils/function'
import React from 'react'
import styled from 'styled-components';
const InputCustom = styled.input`
  
`;
const DataTime = ({
  value,
  onChange = null,
  ...props
}) => {
  return (
    <InputCustom
      type='date'
      value={value || formatDateTime(Date.now())}
      onChange={(value)=>onChange ? onChange(value.target.value) : {}}
      {...props}
    />
  )
}

export default DataTime
