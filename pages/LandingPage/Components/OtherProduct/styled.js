import { BG_BTN } from '@/common/constant';
import ButtonBasic from '@/Components/ButtonBasic';
import { MediumText, NormalText } from '@/Components/TextSize';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';

export const ContainerOtherProduct = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 768px) {
  }
`;
export const BgOtherProduct = styled.div`
  position: absolute;
  width: 100%;
  height: 80%;
  background: red;
  top: 120px;
  left: 0;
  background: ${BG_BTN.bgBlue1} !important;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const ImgOtherProduct = styled(LazyLoadImage)`
  height: 250px !important;
  width: max-content !important;
  margin: auto;
  border-radius: 50%;
`;
export const TileOtherProduct = styled(MediumText)`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;
export const DesOtherProduct = styled(NormalText)`
  text-align: center;
`;
export const BtnBuyOtherProduct = styled(ButtonBasic)`
  text-align: center;
  min-width: 150px;
  border-radius: 8px;
  margin: auto;
  background: ${BG_BTN.bgMain} !important;
`;

export default () => {};
