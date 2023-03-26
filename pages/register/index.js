import { TitleText } from '@/Components/TextSize'
import { Form } from 'antd'
import React from 'react'
import Media from 'react-media'
import { ContainerRegister } from './styled'

const Register = () => {
  return (
    <ContainerRegister>
      <TitleText textTransform >
      Register
      </TitleText>
      {/* <Form >
        <Form.Item>
          <
        </Form.Item>
      </Form> */}
    </ContainerRegister>
  )
}

export default Register
