import { BSC_RPC, URI_NFT, URL_NFT } from '@/common/constant';
import { convertDateFormat, detectImageUrl, ellipsisAddress, viewExternal } from '@/Utils/function';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ImageLazy from '../ImageLazy';
import { MediumText, NormalText } from '../TextSize';
const ContainerItemNFT = styled.div`
    justify-content: center;
    align-items: center; 
    max-width: 300px;
    min-width: ${props => props.isMinWidth ? '200px' : 'auto'};
    position: relative;
    background: transparent;
    align-self: stretch;
    display: flex;
    flex-flow: column wrap;
    cursor: pointer;
    box-sizing: border-box;
    border-image-slice: 1;
    border-radius: 16px;
    border: 1px solid #2b5540;
    padding: 5px 15px;
`
const Img = styled.img`
    width: 100%;

`
const ContainerImgNFT = styled.div`
     padding: 5px;
    width: 100%;
    margin: auto;
    text-align: center;
`
const HashNFT = styled(NormalText)`
  :hover{
    font-weight: bold;
    color:#2b5540;
  }
`
const ItemNFT = ({
  nft,
  onClick
}) => {
  const messages = useSelector(state => state.locale.messages)
  const getNameChain = useCallback((item)=>{
    if(item?.chainId){
      if(BSC_RPC[Number(item?.chainId)]){
        return BSC_RPC[Number(item?.chainId)].nativeCurrency.symbol
      }
      return 'BNB'
    }
  },[])
  return (
    <ContainerItemNFT>
      <ContainerImgNFT onClick={onClick}>
        <ImageLazy
          src={detectImageUrl(nft?.data?.image)}
          alt={detectImageUrl(nft?.data?.image)}
        />
        {/* <Img src={detectImageUrl(nft?.data?.image)} /> */}
      </ContainerImgNFT>

      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
        <MediumText textTransform>
          {nft?.data.nameStudent}
        </MediumText>
        <MediumText>
          {`${messages.textPopular.nameChain} : ${getNameChain(nft)}`}
        </MediumText>
        <MediumText>
          {`${messages.textPopular.tokenId} : ${nft?.tokenId}`}
        </MediumText>
        <HashNFT onClick={() => viewExternal(`https://testnet.bscscan.com/tx/${nft?.hash}`)}>
          <a>
            {`Tx: ${ellipsisAddress(nft?.hash, 8, 6)}`}
          </a>
        </HashNFT>
        <NormalText>
          {convertDateFormat(nft?.time)}
        </NormalText>

      </div>
    </ContainerItemNFT>
  )
}

export default ItemNFT
