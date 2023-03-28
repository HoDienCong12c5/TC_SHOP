import { BSC_RPC, URI_, URL_ } from '@/common/constant';
import { convertDateFormat, detectImageUrl, ellipsisAddress, viewExternal } from '@/Utils/function';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImageLazy from '../ImageLazy';
import ImageNext from '../ImageNext';
import { MediumText, NormalText, TitleText } from '../TextSize';
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
   font-weight: bold;
   text-transform: uppercase;
`
export const ImgCoffeeDetail = styled(ImageNext)`
  max-width: 100%;
  max-height: auto;
  max-height: 260px;
`;
const Item = ({
  item,
  onClick
}) => {
  const messages = useSelector(state => state.locale.messages)
  return (
    <ContainerItem>
      <ContainerImg onClick={onClick}>
        <ImgCoffeeDetail
          src={detectImageUrl(item?.image_main)}
          alt= {item.name}
        />
        {/* <ImageLazy
          src={detectImageUrl(item?.image_main)}
          alt={detectImageUrl(item?.image_main)}
        /> */}
      </ContainerImg>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <MediumText textTransform>
          {item.name}
        </MediumText>
        <MediumText >
          {`${messages.coffeeDetail.sold}: ${item.sell}`}
        </MediumText>
        <PriceItem className='mb-10'>
          {`${item.price}.000 VND`}
        </PriceItem>
      </div>
    </ContainerItem>
  )
}

export default Item
