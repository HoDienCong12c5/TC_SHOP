import ButtonBasic from '@/Components/ButtonBasic';
import React from 'react'
import styled from 'styled-components';
const ContainerAdmin = styled.div`
  display: flex;
  width: 100%;
  gap:10px; 
`;
const MenuAdmin = styled.div`
  width: 30px;
  max-width: 200px;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap:10px;
`;
const RightContentAdmin = styled.div`
  flex:1;
  display: flex;
  background-color: blue;
  align-self: stretch;
`;
const ButtonMenu = styled(ButtonBasic)`
  width: 100%;
`;
const AdminShop = () => {
  const menu = [
    'Coffee',
    'pod',
    'Contact',
    'Build',
    'Order',
    'About',
    'Discus'
  ]
  return (
    <ContainerAdmin className='container-base'>
      <MenuAdmin>
        {
          menu.map(item=>(
            <ButtonMenu key={item} >
              {item}
            </ButtonMenu>
          ))
        }
      </MenuAdmin>
      <RightContentAdmin >
        right
      </RightContentAdmin>
    </ContainerAdmin>
  )
}

export default React.memo(AdminShop)
