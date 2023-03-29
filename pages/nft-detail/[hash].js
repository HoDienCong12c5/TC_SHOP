import ImageLazy from '@/Components/ImageLazy';
import { TitleText } from '@/Components/TextSize';
import FirebaseService from '@/Services/FirebaseService';
import { convertDateFormat, convertNumberToHex, detectImageUrl, viewExternal } from '@/Utils/function';
import { Row } from 'antd';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { ContainerNFTDetail, LeftNFTContainerImg, LeftNFTDetail, RightNFTDetail, TextMedium } from './styled';
import Loading from '@/Components/MyLoading'
import { CHAIN_ID_SUPPORT } from '@/common/constant';
import {convertUtfToHex} from '@/Utils/function'
const NFTDetail = ({ hash }) => {
  const [nftDetail, setNftDetail] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const data = await FirebaseService.storeCrossTech.getDataByHash(hash)
      data?.length > 0 && setNftDetail(data[0])

    }
    getData()

  }, [])
  const openTabOther = (txHash,chainId)=>{
    console.log('====================================');
    console.log({txHash,chainId:convertNumberToHex(Number(chainId))});
    console.log('====================================');
    if(convertNumberToHex(Number(chainId)) === CHAIN_ID_SUPPORT[97]){
      viewExternal(`https://testnet.bscscan.com/tx/${txHash}`)
    }else{
      viewExternal(`https://goerli.etherscan.io/tx/${txHash}`)
    }
  }
  const renderContent = (title, content, onClick = null, isHover = true) => {
    return (
      <Row style={{ gap: 5, flexFlow: 'row nowrap' }} >
        <TextMedium style={{ whiteSpace: 'nowrap' }}>
          {title}
        </TextMedium>
        <TextMedium
          isContent
          onClick={() => onClick ? onClick() : null}
          className={classNames(
            { 'hover hover__text-decoration': isHover }
          )}
        >
          {content}
        </TextMedium>
      </Row>
    )
  }
  return (
    <div className='container-basic'>
      <ContainerNFTDetail >
        {
          nftDetail ? (
            <>
              <LeftNFTDetail span={10} >
                <LeftNFTContainerImg>
                  <ImageLazy
                    src={detectImageUrl(nftDetail.data.image)}
                    alt={detectImageUrl(nftDetail.data.image)}
                    width={'90%'}
                  />
                </LeftNFTContainerImg>
              </LeftNFTDetail>
              <RightNFTDetail span={13} offset={1}>
                <TitleText className='mb-10'>
                  {nftDetail.data?.nameUser}
                </TitleText>
                {
                  renderContent(
                    'Khoa hoc :',
                    nftDetail.title,
                    null,
                    false
                  )
                }
                {
                  renderContent(
                    'Token ID:',
                    nftDetail.tokenId
                  )
                }
                {
                  renderContent(
                    'Chain Id:',
                    nftDetail.chainId
                  )
                }
                {
                  renderContent(
                    'Name student:',
                    nftDetail.data.nameStudent
                  )
                }
                {
                  renderContent(
                    'Address student:',
                    nftDetail.to
                  )
                }
                {
                  renderContent(
                    'Hash Tx:',
                    nftDetail.hash,
                    () => openTabOther(nftDetail.hash, nftDetail.chainId)
                  )
                }
                {
                  renderContent(
                    'Time:',
                    convertDateFormat(nftDetail.time),
                    null,
                    false
                  )
                }

              </RightNFTDetail>
            </>
          ) : (
            <Loading />
          )
        }

      </ContainerNFTDetail>
    </div>
  )
}
NFTDetail.getServerSideProps = ({ query }) => {
  const { hash } = query
  return {
    props: {hash}, // will be passed to the page component as props
  }
}
export default NFTDetail
