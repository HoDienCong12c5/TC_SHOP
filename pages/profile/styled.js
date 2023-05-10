import ButtonBasic from '@/Components/ButtonBasic';
import { Menu } from 'antd';
import styled from 'styled-components';
const borderradius = 8
export const ContainerMyProfile = styled.div`
  display: flex;
  width:100%;
  flex-direction:row;
`;
export const LeftMyProfile = styled.div`
  max-width: 400px;
  display: flex;
  width: 20%;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  padding: 20px 10px;
  background: white;
  border-radius: ${borderradius}px;
  align-self: stretch;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
`;
export const ButtonMenu = styled(Menu.Item)`
  background-color: transparent;
  background: transparent;
  display: flex;
  gap:10px;
  height: 80px;
  
  
`

export const RightMyProfile = styled.div`
  background: white;
  width: 100%;
  margin-left: 15px;
  border-radius: ${borderradius}px;
  padding: 15px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
`;
export const ContainerInfor = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;


export default () => { };
