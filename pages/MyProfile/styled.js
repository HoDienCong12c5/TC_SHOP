import styled from 'styled-components';
export const ContainerMyProfile = styled.div`
  display: flex;
  width:100%;
`;
export const LeftMyProfile = styled.div`
  padding: 10px ;
  max-width: 400px;
  display: flex;
  width: 20%;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
  padding: 0px 10px;
  background: white;
  border-radius: 14px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
`;

export const RightMyProfile = styled.div`
  background: white;
  width: 100%;
  margin-left: 15px;
  border-radius: 14px;
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
