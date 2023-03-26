import ItemNFT from '@/Components/ItemNFT'
import { MediumText, NormalText } from '@/Components/TextSize'
import useGetMyNFT from '@/Hook/useGetMyNFT'
import useUserData from '@/Hook/useUserData'
import FirebaseService from '@/Services/FirebaseService'
import { Row } from 'antd'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Media from 'react-media'
import { ContainerInfor, ContainerMyProfile, RightMyProfile } from './styled'
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
const MyProfile = () => {
  const router = useRouter()
  const { isSigned, userAddress } = useUserData()
  const {listMyNFT, loadingLitMyNFT} = useGetMyNFT()


  useEffect(() => {
    if (!isSigned) {
      router.push('/')
    }
  }, [isSigned, userAddress])

  const onClickItemMenu = (key) => {

  }
  const renderDesktop = () => {
    return(
      <>
        <ContainerInfor className='mb-20'>
          <MediumText>
          Ho Dien Cong
          </MediumText>
          <Row justify={'center'} style={{ gap: 5 }}>
          Address :
            <NormalText>
              {userAddress}
            </NormalText>
          </Row>
        </ContainerInfor>
        <ContainerMyProfile >
          <RightMyProfile>
            <div className="list-nft">
              {
                listMyNFT?.length > 0 && (
                  listMyNFT?.map(nft => (
                    <ItemNFT
                      key={nft}
                      nft={nft}
                      onClick={() => {
                        router.push(`/nft-detail/${nft?.hash}`)
                      }}
                    />
                  ))

                )
              }
            </div>
          </RightMyProfile>
        </ContainerMyProfile>
      </>
    )
  }
  const renderMobile = () => {
    return <></>
  }


  return (
    <div className="container-basic">
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </div>
  )
}

export default MyProfile
