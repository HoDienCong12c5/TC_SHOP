import { Menu } from 'antd'
import React from 'react'
import styled from 'styled-components';
const MyMenuCustom = styled(Menu)`
  .ant-menu-overflow-item{
    padding: 0px;
  }
  line-height:normal;
  border-bottom: 0px;
  .ant-menu-item-selected  {
    span{
      color: blue

    }
  }
  .ant-menu-item-selected::after{
    border-bottom-width: 0px !important;
          border-bottom-color: transparent !important;
  }
  .ant-menu-submenu-title{
    top: 25%;
  }

`;
const MyMenu = ({
  mode = 'horizontal',
  onClick,
  listItemMenu,
  ...props
}) => {
  return (
    <MyMenuCustom
      onClick={onClick}
      mode={mode}
      items={listItemMenu}
      {...props}
    />

  )
}

export default MyMenu
