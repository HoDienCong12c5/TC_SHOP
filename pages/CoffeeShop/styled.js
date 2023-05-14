import ButtonBasic from '@/Components/ButtonBasic';
import ImageLazy from '@/Components/ImageLazy';
import ImageNext from '@/Components/ImageNext';
import MyInput from '@/Components/MyInput';
import { Form } from 'antd';
import styled from 'styled-components';
export const ContainerCoffeeShop = styled.div`
`;

// coffee detail ----------------------------------------
export const ContainerCoffeeDetail = styled.div`
 width: 100%;
 display: flex;
 gap:30px;
`;
export const ContainerImgCoffeeDetail = styled.div`
 flex :4;
`;
export const ContainerContentCoffeeDetail = styled.div`
 flex :6;
`;
export const TitleCoffee = styled.h1`
  color: black;
  font-family: "Fast Hand";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0px;
  text-shadow: rgb(255 255 255 / 65%) 0px 0px 29.0909px;
`;
export const ButtonBuy = styled(ButtonBasic)`
  height: 50px;
  width: 100%;
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;
export const ButtonEx = styled.div`
  height: 30px;
  width: ${props=>props.width ?? 50}px;
  line-height: 27px;
  font-weight: bold;
  background: white;
  color:black;
  justify-content:center;
  text-align: center;
  align-items: flex-end;
  border: 1px solid rgba(0,0,0,0.2);
  cursor: pointer;

`;
export const AmountCoffee = styled.div`
  height: 30px;
  min-width: 50px;
  line-height: 30px;
  font-weight: bold;
  background: white;
  color:black;
  justify-content:center;
  text-align: center;
  align-items: flex-end;
  border: 1px solid rgba(0,0,0,0.2);
`;
export const PriceCoffee = styled.div`
  color: black;
  font-size: 30px;
  line-break: 30px;
`;
export const ImgCoffeeDetail = styled(ImageNext)`
  max-width: 500px;
  min-width: 300px;
  max-height: 500px !important;
  @media screen and (max-width: 768px) {
    max-height: 350px !important;
    width:auto !important;
    margin:auto !important;
    min-width: auto;
  }
`;
//------ modal buy coffee
export const FormItem = styled(Form.Item)`
.ant-form-item-row{
  .ant-form-item-control{
    width: 100% !important;
    flex: none;
    min-width: 100%; 
  }
}
`;
export const InputForm = styled(MyInput)`
height: 30px;
`

export default () => {};
