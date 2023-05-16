import ButtonBasic from '@/Components/ButtonBasic';
import ImageLazy from '@/Components/ImageLazy';
import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  justify-content: center;
  margin: auto;
`;

export const ContentHome = styled.div`
  display: flex;
  @media screen and (max-width: 768px){
    flex-flow: column;
  }
`;
export const LeftHome = styled.div`
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
export const RightHome = styled.div`
  background: white;
  width: calc(80% - 15px);
  margin-left: 15px;
  border-radius: 14px;
  padding: 15px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;
`;
export const ContainerListNFTHome = styled.div`
  display: grid;
  width: calc(100% - 80px);
  flex-flow: row wrap;
  justify-content: flex-start;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-gap: 20px;
  margin-right: 130px;
  height: fit-content;
  @media screen and (max-width: 1350px) {
    width: calc(100% - 59px);
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media screen and (max-width: 1120px) {
    width: calc(100% - 33px);
    grid-template-columns: 33% 33% 33%;
  }
  @media screen and (max-width: 899px) {
    width: calc(100% - 20px);
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 24px);
    grid-template-columns: 33% 33% 33%;
    grid-gap: 16px;
  }
  @media screen and (max-width: 599px) {
    width: calc(100% - 16px);
    grid-template-columns: 50% 50%;
    grid-gap: 16px;
  }
`;
export const ItemMenu = styled(ButtonBasic)`
  border: 0px;
  background-color: transparent;
  border-color: transparent;
  box-shadow: 0px;
  text-align: start;
  color: black !important;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  &:hover {
    cursor: pointer;
  }
`;
///---------------------new
export const Banner = styled.div`
  
`;
export const ImgBanner = styled(ImageLazy)`
  width: 100%;
`;

export default () => { };
