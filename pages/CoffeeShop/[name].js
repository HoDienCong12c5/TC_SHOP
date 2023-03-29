import { MediumText, NormalText, TitleText } from '@/Components/TextSize';
import FirebaseService from '@/Services/FirebaseService';
import { numberWithCommas, stingToArr } from '@/Utils/function';
import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Media from 'react-media'
import { useSelector } from 'react-redux';
import { AmountCoffee, ButtonBuy, ButtonEx, ContainerCoffeeDetail, ContainerContentCoffeeDetail, ContainerImgCoffeeDetail, ImgCoffeeDetail, PriceCoffee, TitleCoffee } from './styled';
import Loading from '@/Components/MyLoading'
import ButtonBasic from '@/Components/ButtonBasic';
import { images } from '@/common/images';
import BtnBack from '@/Components/BtnBack';
import Image from 'next/image';
import ImageNext from '@/Components/ImageNext';
import { useWorkModal } from '@/Hook/useModal';
import { modalConfig } from '@/common/constant';
import ModalBuyCoffee from './Component/LeftMenu/ModalBuyCoffe';
import ModalTx from '@/Components/ModalTx';

const CoffeeDetail = ({name}) => {
  const message = useSelector(state => state.locale.messages)
  const {showModal, hideModal} = useWorkModal()

  const [coffeeDetail, setCoffeeDetail] = useState(null);
  const [detailMore, setDetailMore] = useState(null);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    const getDataDetail = async()=>{
      const id = stingToArr(name,1)
      const data = await FirebaseService.coffeeShop.getDataByID(id)
      setCoffeeDetail(data)
    }
    getDataDetail()
  }, []);

  useEffect(() => {
    if(coffeeDetail){

    }
  }, [amount,coffeeDetail]);

  const buyCoffee = () => {
    let styleModal = modalConfig
    showModal({
      body:<ModalBuyCoffee
        coffee={coffeeDetail}
      />,
      modalConfig:styleModal
    })
  }

  const renderAmount = ()=>{
    const plusNumber = ()=>{
      if((coffeeDetail.totalNumber - coffeeDetail.sell) > amount){
        setAmount(amount + 1)
      }
    }
    return (
      <Row align={'middle'}>
        <MediumText className='mr-10'>
          {`${message.textPopular.amount}:`}
        </MediumText>
        <ButtonEx onClick={()=>{amount > 1 && setAmount(amount - 1)}}>-</ButtonEx>
        <AmountCoffee>{amount}</AmountCoffee>
        <ButtonEx onClick={plusNumber}>+</ButtonEx>
      </Row>
    )
  }
  const renderDesktop = () => {
    return (
      <>
        <ContainerCoffeeDetail>
          <ContainerImgCoffeeDetail style={{textAlign:'start'}}>
            <ImgCoffeeDetail
              src={'https://skywalker.infura-ipfs.io/ipfs/QmUirr7dsqyZgA5bDx4TqumJKCkiDtWdLHmGmaiZ5uEr15'}
              alt={stingToArr(name)}
            />
            {/* <ImageNext
              src={'https://skywalker.infura-ipfs.io/ipfs/QmUirr7dsqyZgA5bDx4TqumJKCkiDtWdLHmGmaiZ5uEr15'}
              alt="Picture of the author"
              width={500}
              height={500}
            /> */}
          </ContainerImgCoffeeDetail>
          <ContainerContentCoffeeDetail style={{textAlign:'start'}} className='w-full'>
            <div className='col-basic gap-15 mt-20 w-full'>
              <TitleCoffee >
                {coffeeDetail.name}
              </TitleCoffee>
              <MediumText >
                {`${message.coffeeDetail.sold}: ${coffeeDetail.sell}`}
              </MediumText>
              <MediumText >
                {`${message.coffeeDetail.totalNumber}: ${coffeeDetail.totalNumber}`}
              </MediumText>
              <MediumText >
                {`${message.coffeeDetail.numberLike}: ${coffeeDetail.number_like}`}
              </MediumText>
              <MediumText >
                {`${message.coffeeDetail.weight}: ${coffeeDetail.weight} g`}
              </MediumText>
              <MediumText >
                {`${message.textPopular.freeShip}: ${message.textPopular.freeShip_des}`}
              </MediumText>
              {renderAmount()}
              <PriceCoffee>
                {`${message.coffeeDetail.price}: ${numberWithCommas(coffeeDetail.price * amount)} VNĐ`}
              </PriceCoffee>

              <Row >
                <Col span={10}>
                  <ButtonBuy onClick={buyCoffee}>
                    {message.common.buyNow}
                  </ButtonBuy>
                </Col>
                <Col span={8} offset={1} type={3}>
                  <ButtonBuy className='btn-one'>
                    {message.common.addCart}
                    <Image
                      loading='lazy'
                      className='ml-5'
                      src={images.icon.iconCart}
                      style={{height:30, width:30}}
                    />
                  </ButtonBuy>
                </Col>
              </Row>
              <MediumText>
                {message.textPopular.description} :
              </MediumText>
              {
                coffeeDetail.description && (
                  <MediumText>
                    {message.textPopular.description} :
                  </MediumText>
                )
              }

            </div>

          </ContainerContentCoffeeDetail>
        </ContainerCoffeeDetail>
      </>
    )
  }
  const renderMobile = () => {
    return <>
    </>
  }
  return (
    <div className='container-basic'>
      <BtnBack main={'Coffee shop'} pageNow={stingToArr(name)}/>
      {
        coffeeDetail ? (
          <Media query='(min-width: 768px)'>
            {(match) => {
              if (match) {
                return renderDesktop()
              }
              return renderMobile()
            }}

          </Media>
        ) : (
          <Loading />
        )
      }

    </div>
  )
}
export const getServerSideProps = ({query}) => {
  const {name} = query
  return { props: {name} }
}
export default CoffeeDetail
