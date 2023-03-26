import Img, { images } from '@/common/images'
import React, { Suspense, useEffect } from 'react'
import styles from '../../LP.module.scss'
import Media from 'react-media'
import { BtnBuyNow, ContainerBanner, ContainerBannerMobileLP, ContainerIntroDuce, ContainerLogo, DesBannerLP, DesContentIntroduce, IconIntroduce, ImgLogo, RowLPTop, TitleBannerLP, TitleContentIntroduce } from '../../styled'
import { Col } from 'antd'
import ImageLazy from '@/Components/ImageLazy'
import Aos from 'aos'
const BannerLP = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])
  const renderDesktop = () => {
    return(
      <RowLPTop>
        <ContainerBanner span={8} isLeft gap={30} data-aos="fade-right">
          <TitleBannerLP>
            MLem Coffee sắc hương tây nguyên
          </TitleBannerLP>
          <DesBannerLP>
          MLem Coffee sắc hương tây nguyên
          </DesBannerLP>
          <BtnBuyNow>
            Buy Coffee
          </BtnBuyNow>
        </ContainerBanner>

        <ContainerBanner span={10}>
          <ContainerLogo>
            <ImageLazy
              className={styles['img-logo-banner']}
              src={images.landingPage.logo}
              alt={images.landingPage.logo}
            />

          </ContainerLogo>
        </ContainerBanner>

        <ContainerBanner data-aos="fade-left" span={6} isLeft gap={30} style={{paddingLeft:15}}>
          <ContainerIntroDuce>
            <IconIntroduce src={images.home.iconElement} alt={images.home.iconElement} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Nguồn gốc
              </TitleContentIntroduce>
              <DesContentIntroduce>
                100% được trồng từ Tây Nguyên
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce >
            <IconIntroduce src={images.home.iconOrigin} alt={images.home.iconOrigin}/>
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Địa chỉ
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Thôn Thanh giáo, Huyện Đức Cơ, Tình Gia Lai
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce>
            <IconIntroduce src={images.home.iconSmell} alt={images.home.iconSmell} />
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Hương vị
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Đậm sắc tây nguyên, thơm ngon pha chút vị chua đặc trưng
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
        </ContainerBanner>
      </RowLPTop>
    )
  }

  const renderMobile = () => {
    return (
      <ContainerBannerMobileLP >
        <ContainerBanner gap={30}>
          <TitleBannerLP>
            MLem Coffee sắc hương tây nguyên
          </TitleBannerLP>
          <DesBannerLP>
          MLem Coffee sắc hương tây nguyên
          </DesBannerLP>
          <BtnBuyNow>
            Buy Coffee
          </BtnBuyNow>
        </ContainerBanner>

        <ContainerBanner style={{width:'100%'}} >
          <ContainerLogo>
            <ImageLazy
              className={styles['img-logo-banner']}
              src={images.landingPage.logo}
              alt={images.landingPage.logo}
            />
          </ContainerLogo>
        </ContainerBanner>

        <ContainerBanner isRight gap={30}>
          <ContainerIntroDuce>
            <IconIntroduce src={images.home.iconElement} alt={images.home.iconElement}/>
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Nguồn gốc
              </TitleContentIntroduce>
              <DesContentIntroduce>
                100% được trồng từ Tây Nguyên
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce >
            <IconIntroduce src={images.home.iconOrigin} alt={images.home.iconOrigin}/>
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Địa chỉ
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Thôn Thanh giáo, Huyện Đức Cơ, Tình Gia Lai
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
          <ContainerIntroDuce>
            <IconIntroduce src={images.home.iconSmell} alt={images.home.iconSmell}/>
            <Col style={{flex:1}} >
              <TitleContentIntroduce>
                  Hương vị
              </TitleContentIntroduce>
              <DesContentIntroduce>
                Đậm sắc tây nguyên, thơm ngon pha chút vị chua đặc trưng
              </DesContentIntroduce>
            </Col>
          </ContainerIntroDuce>
        </ContainerBanner>
      </ContainerBannerMobileLP>
    )
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


export default BannerLP
