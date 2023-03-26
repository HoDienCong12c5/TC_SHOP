import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import React from 'react'
import styled from 'styled-components';
const ContainerSpin = styled(Spin)`
  position: absolute;
  margin: auto;
  width: ${props=>props.width ?? '-webkit-fill-available'};
  top: 25%;
`;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
)
// position: absolute;
// margin: auto;
// width: -webkit-fill-available;
// top: 25%;
const App = ({
  width = null,
  ...props
}) => <ContainerSpin width={width}{...props} indicator={antIcon} />

export default App
