import ItemNFT from '@/Components/ItemNFT';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import Loading from '@/Components/MyLoading'
import { ContainerHome, ContainerListNFTHome, ContentHome, ItemMenu, LeftHome, RightHome } from './styled';
import SEO from '@/pages/Container/Header/seo';
import useGetAllNFT from '@/Hook/useGetAllNFT';
import BannerHome from './Component/Banner';
import InfoHome from './Component/Info';
import { Col, Row } from 'antd'
import { MediumText, TitleText } from '@/Components/TextSize';
import { useSelector } from 'react-redux';
import ItemCard from './Component/ItemCart';
import ListProduct from '../Container/Header/ListProduct';
// import jwt_decode from 'jwt-decode';
var jwt = require('jsonwebtoken');
const menuHome = [
  {
    key: 'qa_qc',
    title: 'QA / QC'
  },
  {
    key: 'basic_blockchain',
    title: 'Basic blockchain'
  },
  {
    key: 'basic_unity',
    title: 'Basic Unity'
  },

  {
    key: 'basic_c',
    title: 'Basic c'
  }

]

const HomeScreen = () => {
  const message = useSelector(state => state.locale.messages)
  const router = useRouter()
  const {listAllNFT} = useGetAllNFT()

  const [itemSelected, setItemSelected] = useState('qa_qc')

  const onClickItemMenu = (key) => {
    setItemSelected(key)
    switch (key) {
    case 'qa_qc':

      break;

    default:
      break;
    }
  }
  const renderDesktop = () => {
    return (
      <>
        <ListProduct title={message.home.titleCoffee}/>
        <ListProduct title={message.home.titlePod} typeProduct={'pod'}/>

      </>
    )
  }
  const renderMobile = () => {
    return (
      <ContainerListNFTHome>
        {
          listAllNFT?.length > 0 ? (
            listAllNFT.map((item) => {
              return (
                <ItemNFT key={item}
                  nft={item}
                  onClick={() => {
                    router.push(`/nft-detail/${item?.hash}`)
                  }}
                />
              )
            })
          ) : (
            <Loading />
          )
        }
      </ContainerListNFTHome>
    )
  }
  return (
    <ContainerHome>
      <SEO />
      <BannerHome />
      <InfoHome />
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </ContainerHome>
  )
}

export default HomeScreen
