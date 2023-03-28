import ImageNext from '@/Components/ImageNext';
import { MediumText, NormalText } from '@/Components/TextSize';
import { AmountCoffee, ButtonEx } from '@/pages/coffee-shop/styled';
import { numberWithCommas } from '@/Utils/function';
import { Col, Row } from 'antd';
import React, { useState } from 'react'
import Media from 'react-media';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
const ContainerCart = styled.div`
  
`;
const ImgCartItem = styled(ImageNext)`
height:100%;
width:auto;
  
`;

const ContentCartItem = styled.div`
display: flex;
flex-direction: column;
gap:10px;
`;
const index = ({
  itemCart,
  onDelete,
  onPlus,
  onMins,
  onSelect
}) => {
  const messages = useSelector(state => state.locale.messages)

  const [amount, setAmount] = useState(1)
  const renderDesktop = () => {
    return <Row>
      <Col span={3} >
        <ImgCartItem
          src={itemCart?.image_main}
          alt= {itemCart.name}
        />
      </Col>
      <Col span={5} >
        <ContentCartItem >
          <MediumText
            texTransform
          >
            {itemCart.name}
          </MediumText>
          <NormalText >
            {itemCart.weight}
          </NormalText>
        </ContentCartItem>
      </Col>
      <Col span={5} >
        <NormalText >
          {numberWithCommas(amount * itemCart.price)}
        </NormalText>
      </Col>
      <Col span={5} >
        <Row>
          <ButtonEx onClick={()=>{amount > 1 && setAmount(amount - 1)}}>-</ButtonEx>
          <AmountCoffee>{amount}</AmountCoffee>
          <ButtonEx onClick={()=>setAmount(amount + 1)}>+</ButtonEx>
        </Row>
      </Col>
    </Row>
  }
  const renderMobile = () => {
    return <></>
  }

  return (
    <Media query='(min-width: 768px)'>
      {(match) => {
        if (match) {
          return renderDesktop()
        }
        return renderMobile()
      }}

    </Media>
  )
}

export default index
