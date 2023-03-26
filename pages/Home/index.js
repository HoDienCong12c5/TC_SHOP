import ItemNFT from '@/Components/ItemNFT';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Media from 'react-media';
import Loading from '@/Components/Loading'
import { ContainerHome, ContainerListNFTHome, ContentHome, ItemMenu, LeftHome, RightHome } from './styled';
import SEO from '@/pages/Container/Header/seo';
import useGetAllNFT from '@/Hook/useGetAllNFT';
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
  const router = useRouter()
  const {listAllNFT} = useGetAllNFT()

  const [itemSelected, setItemSelected] = useState('qa_qc')
  useEffect(() => {
    var token = jwt.sign({ foo: 'bar' },'sw');
    console.log('====================================');
    console.log({token});
    console.log('====================================');

  }, [])
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
      <ContentHome>
        <LeftHome >
          <ul></ul>
          {
            menuHome.map((item, index) => {
              return (
                <ItemMenu
                  key={item}
                  nft={item}
                  onClick={() => onClickItemMenu(item.key)}
                  className={'hover hover__zoom'}
                  selected={itemSelected === item.key}
                >
                  {item?.title}
                </ItemMenu>
              )
            })
          }
        </LeftHome>
        <RightHome >
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
        </RightHome>
      </ContentHome>
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
