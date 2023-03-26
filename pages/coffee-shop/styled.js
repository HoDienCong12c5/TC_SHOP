import ButtonBasic from '@/Components/ButtonBasic';
import ImageLazy from '@/Components/ImageLazy';
import styled from 'styled-components';
export const ContainerCoffeeShop = styled.div`
`;

// coffee detail ----------------------------------------
export const ContainerCoffeeDetail = styled.div`
 width: 100%;
 display: flex;
 gap:30px;

`;
export const TitleCoffee = styled.div`
  color: black;
  font-family: "Fast Hand";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-shadow: rgb(255 255 255 / 65%) 0px 0px 29.0909px;
`;
export const ButtonBuy = styled(ButtonBasic)`
  height: 50px;
  width: 100%;
`;
export const ButtonEx = styled.div`
  height: 30px;
  width: 50px;
  line-height: 30px;
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
  width: 50px;
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
export const ImgCoffeeDetail = styled(ImageLazy)`
  max-width: 100%;
  min-width: 500px;
  max-height: 600px;
`;

export default () => {};
