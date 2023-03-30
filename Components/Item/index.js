import { COLOR } from '@/common/constant';
import { detectImageUrl, numberWithCommas, roundingNumber } from '@/Utils/function';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImageLazy from '../ImageLazy';
import MySliderSell from '../MySliderSell';
import { MediumText, NormalText } from '../TextSize';
const ContainerItem = styled.div`
    justify-content: center;
    align-items: center; 
    max-width: 300px;
    min-width: ${props => props.isMinWidth ? '200px' : 'auto'};
    position: relative;
    background: white !important;
    align-self: stretch;
    display: flex;
    flex-flow: column wrap;
    cursor: pointer;
    box-sizing: border-box;
    border-image-slice: 1;
    /* border-radius: 16px; */
    /* border: 1px solid #2b5540; */
    padding: 5px 15px;
`
const ContainerImg = styled.div`
     padding: 5px;
    width: 100%;
    margin: auto;
    text-align: center;
`

const PriceItem = styled(MediumText)`
color:green;
   text-transform: uppercase;
   font-size: 1.75rem;
`
export const ImgCoffeeDetail = styled(ImageLazy)`
  max-height: 260px;
`;
export const ContainerDiscount = styled.div`
    padding: 0px 5px;
  border:1px solid ${COLOR.green1};
`;
export const TitleText = styled(MediumText)`
  margin-bottom: 10px;
  font-weight:600;
`;

const Item = ({
  item,
  onClick
}) => {
  const messages = useSelector(state => state.locale.messages)
  return (
    <ContainerItem>
      <ContainerImg onClick={onClick}>
        {/* <ImgCoffeeDetail
          src={detectImageUrl(item?.image_main)}
          alt= {item.name}
        /> */}
        <ImgCoffeeDetail
          src={detectImageUrl(item?.image_main)}
          alt= {item.name}
        />
      </ContainerImg>

      <div className={'mt-10'} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TitleText textTransform>
          {item.name}
        </TitleText>
        <Row justify={'space-between'} className={'w-full'}>
          <Col>
            <NormalText className={'text-decoration op-0_0'}>
              {`đ. ${numberWithCommas(item.price * 1.2)}`}
            </NormalText>
          </Col>
          <Col>
            <ContainerDiscount >
              {`${messages.textPopular.discount} ${20}%`}
            </ContainerDiscount>
          </Col>
        </Row>


        <Row align={'middle'}>
          <NormalText>đ.</NormalText>
          <PriceItem className='mb-10'>
            {`${numberWithCommas(item.price)}`}
          </PriceItem>
        </Row>

        <MySliderSell
          className='mb-10'
          total={item.totalNumber}
          sell={item.sell}
        />
      </div>
    </ContainerItem>
  )
}

export default Item
