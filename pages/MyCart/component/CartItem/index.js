import ImageNext from '@/Components/ImageNext';
import ModalTx from '@/Components/ModalTx';
import { MediumText, NormalText } from '@/Components/TextSize';
import { useWorkModal } from '@/Hook/useModal';
import { AmountCoffee, ButtonEx } from '@/pages/CoffeeShop/styled';
import { numberWithCommas } from '@/Utils/function';
import { Checkbox, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { modalConfig } from '@/common/constant'

const ContainerCartItem = styled(Row)`
  width: 100%;
  align-items: center;
  background: white;
  padding: 12px 5px;
`;
const ContentCartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ColCustom = styled(Col)`
`;
const TextDiscount = styled(NormalText)`
text-decoration-line: line-through;
`;
const ImgCartItem = styled(ImageNext)`
  height: 100%;
  width: auto !important;
  max-height: 100px;
  width: fit-content;
`;
const CartItem = ({ itemCart, listCartRef, listAllCoffee, indexCartItem }) => {
  const messages = useSelector(state => state.locale.messages)
  const {showModal,hideModal} = useWorkModal()

  const [amount, setAmount] = useState(1);
  const [cartItem, setCartItem] = useState(null);
  const [noPayment, setNoPayment] = useState(true);

  useEffect(() => {
    if (listAllCoffee.data?.length > 0) {
      listAllCoffee.data.forEach((coffee) => {
        if (coffee.id === listCartRef.current[indexCartItem]?.idProduct) {
          listCartRef.current[indexCartItem].price = coffee.price;
          listCartRef.current[indexCartItem].amount = amount;
          listCartRef.current[indexCartItem].total = coffee.price * amount;
          setCartItem({ ...coffee, ...amount });
          if (amount > coffee.totalNumber - coffee.sell) {
            setAmount(amount - 1);
          }
        }
      });
    }
  }, [amount]);
  const handelNoPayment = () => {
    const subMit = ()=>{
      hideModal()
      setNoPayment(!noPayment)
    };
    if(noPayment){
      showModal({
        body:<ModalTx
          title={messages.warning.unPayMent}
          des={messages.warning.unPayMent_des}
          onSubmit={subMit}
        />,
        modalConfig
      })
    }else{
      setNoPayment(!noPayment)
    }


  };
  const plusAmount = () => {
    if (amount < cartItem.totalNumber - cartItem.sell) {
      setAmount(amount + 1);
    }
  };

  return (
    cartItem && (
      <ContainerCartItem key={itemCart}>
        <ColCustom span={1}>
          <Checkbox checked={noPayment} onChange={handelNoPayment}></Checkbox>
        </ColCustom>
        <ColCustom span={3}>
          <ImgCartItem src={cartItem?.image_main} alt={cartItem.name} />
        </ColCustom>
        <ColCustom span={5}>
          <ContentCartItem>
            <MediumText texTransform>{cartItem.name}</MediumText>
            <NormalText>
              {`${messages.coffeeDetail.weight}: ${cartItem.weight}`}
            </NormalText>
          </ContentCartItem>
        </ColCustom>
        <ColCustom span={5}>
          <NormalText>{`${numberWithCommas(cartItem.price)} VNĐ`}</NormalText>
          <div className='mt-5'/>
          <TextDiscount>{`${numberWithCommas(cartItem.price * 1.3)} VNĐ`}</TextDiscount>

        </ColCustom>
        <ColCustom span={5}>
          <Row>
            <ButtonEx width={30}
              onClick={() => {
                amount > 1 && setAmount(amount - 1);
              }}
            >
              -
            </ButtonEx >
            <AmountCoffee>{amount}</AmountCoffee>
            <ButtonEx width={30} onClick={plusAmount}>+</ButtonEx>
          </Row>
        </ColCustom>
        <ColCustom span={4}>
          <NormalText>
            {`${numberWithCommas(amount * cartItem.price)}  VNĐ`}
          </NormalText>
        </ColCustom>
      </ContainerCartItem>
    )
  );
};

export default CartItem;
