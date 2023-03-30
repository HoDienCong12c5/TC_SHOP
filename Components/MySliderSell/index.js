import { COLOR } from '@/common/constant';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const ContainerMySliderSell = styled.div`
  position: relative;
  padding: 2px 5px;
  background-color: rgba(6,191,123,0.2);
  border-radius: 8px;
  width: 100%;
`;
const SellMySliderSell = styled.div`
  width: ${props=>props.width}%;
  position: absolute;
  z-index: 1;
  background-color: ${COLOR.green1};
  height: 100%;
  top: 0;
  left:0;
  border-radius: 8px;
  
`;
const TextMySliderSell = styled.div`
  text-align: center;
  position: relative;
  z-index: 2;
  
`;
const MySliderSell = ({
  total,
  sell,
  text,
  ...props
}) => {
  const width = (sell / total) * 100
  const messages = useSelector(state => state.locale.messages)
  return (
    <ContainerMySliderSell {...props}>
      <TextMySliderSell >
        {text || messages.coffeeDetail.sold}
      </TextMySliderSell>
      <SellMySliderSell width={width}/>

    </ContainerMySliderSell>
  )
}

export default MySliderSell
