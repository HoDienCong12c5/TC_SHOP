import Img from '@/Components/ImageBasic';
import ButtonBasic from '@/Components/ButtonBasic';
import { MediumText, NormalText } from '@/Components/TextSize';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import ImageLazy from '@/Components/ImageLazy';

export const ContainerLP = styled.div`
  overflow: hidden !important;
`;
export const RowLPTop = styled(Row)`
  align-items: center;
  width: 100%;
`;
export const ContainerBanner = styled(Col)`
  display: flex;
  flex-flow: column;
  gap: ${(props) => props.gap ?? 10}px;
  padding-right: 10px;
  align-items: ${(props) =>
    props.isLeft ? 'start' : props.isRight ? 'end' : 'center'};
  text-align: ${(props) =>
    props.isLeft ? 'start' : props.isRight ? 'end' : 'center'};
  @media screen and (max-width: 768px) {
    align-items: baseline;
  }
`;
export const TitleBannerLP = styled.h1`
  line-height: 30px;
  font-size: 26px;
  white-space: wrap;
  text-transform: uppercase;
  max-width: 90%;
  @media screen and (max-width: 768px) {
    text-align:center;
    margin:auto;
  }
`;
export const DesBannerLP = styled(NormalText)`
 @media screen and (max-width: 768px) {
    text-align:center;
    margin:auto;
  }
`;
export const BtnBuyNow = styled(ButtonBasic)`
  border-radius: 16px;
  max-width: 120px;
  @media screen and (max-width: 768px) {
    margin:auto;
  }
`;
export const ContainerLogo = styled.div`
  width: 100%;
  height:calc(100vh - 60px) !important;
  margin: auto;
  @media screen and (max-width: 1499px) {
    height:calc(70vh - 60px) !important;
  }
  @media screen and (max-width: 1099px) {
    height:calc(60vh - 60px) !important;
  }
  @media screen and (max-width: 768px) {
    height:calc(50vh - 50px) !important;
  }
`;
export const ImgLogo = styled(Img)`
  width: 95% !important;
  max-height: 100% !important;
  img {
    border-radius: 50% !important;
  }
  @media screen and (max-width: 768px) {
    width: 80% !important;
    margin: auto !important;
  }
`;
export const ContainerIntroDuce = styled(Row)`
  justify-content: center;
  text-align: start;
  white-space: break-spaces;
  overflow: hidden;
  gap: 5px;
  max-width: 90%;
`;
export const IconIntroduce = styled(ImageLazy)`
  height: 50px;
  width: 50px;
`;
export const TitleContentIntroduce = styled(MediumText)`
  font-weight: bold;
`;
export const DesContentIntroduce = styled(NormalText)``;
export const ContainerBannerMobileLP = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

export const ContainerFooterLP = styled.div`
  display: flex;
  flex-flow: row;
  width: 90%;
  margin: auto;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-flow: column;
  }
`;
export const ContainerWave = styled.div`
  position: absolute;
  width: 100%;
  max-width: 100%;
  left: -10%;
  z-index: 1;
  /* height: 150%; */
  /* transform: rotate(180deg); */
`;
export const SVGCustom = styled.svg`
 height:180px;
 @media screen and (max-width: 768px) {
  height:120px;
  }
`;
export default () => { };
