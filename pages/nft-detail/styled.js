import { MediumText } from '@/Components/TextSize';
import { Col, Row } from 'antd';
import styled, { css } from 'styled-components';
export const ContainerNFTDetail = styled(Row)`
   width: 100%;
   min-height: 500px;
    align-items: flex-start;
    justify-content: center;
    /* align-items: center; */
    position: relative;
`;
export const LeftNFTDetail = styled(Col)`
    border-radius: 16px; 
    border: 1px solid black;
`;
export const LeftNFTContainerImg = styled.div`
   width: 90%;
   margin: auto;
   margin: 10px;
`;
export const RightNFTDetail = styled(LeftNFTDetail)`
    align-self: start;
    text-align: initial;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:5px;
`;
export const TextMedium = styled(MediumText)`
  ${props => props.isContent && css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
 
`;

export default () => { };
