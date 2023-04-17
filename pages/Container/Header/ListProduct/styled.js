import ImageNext from '@/Components/ImageNext';
import { PriceItem } from '@/Components/Item';
import { MediumText, TitleText } from '@/Components/TextSize';
import { COLOR } from '@/common/constant';
import styled from 'styled-components';
export const ContainerListProduct = styled.div`
  position: relative !important;
  min-height: 100px;
  margin-top: 20px;
  margin-bottom: 15px;
  @media screen and (max-width:768px) {

  }
`;
export const ContainerItemProduct = styled.div`
  position: relative !important;
`;
export const ImagProduct = styled(ImageNext)`
  width:auto !important;
  height: 180px !important;
`;
export const PriceProduct = styled(PriceItem)`
  color:${COLOR.green};
  font-weight: normal;
`;
export const Discus = styled.div`
  position: absolute;
  top:5px;
  left:5px;
  background: ${COLOR.green1};
  padding:3px 5px;
`;
export const ContainerOutStock = styled.div`
  position: absolute;
  top:50%;
  left: 50%;
  background:${COLOR.white1} ;
  padding: 10px;
  width: 70%;
`;
export default () => {}
