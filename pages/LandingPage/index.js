import React from 'react'
import Media from 'react-media'
import { BtnBuyNow, ContainerBanner, ContainerBannerMobileLP, ContainerIntroDuce, ContainerLogo, ContainerLP, ContainerWave, DesBannerLP, DesContentIntroduce, IconIntroduce, ImgLogo, RowLPTop, SVGCustom, TitleBannerLP, TitleContentIntroduce } from './styled'
import SEOLP from './Seo'
import Img, { images } from '@/common/images'
import { Col } from 'antd'
import styles from './LP.module.scss'
import BannerLP from './Components/Banner'
import OtherProduct from './Components/OtherProduct'
import { BG_BTN } from '@/common/constant'
const LandingPage = () => {

  const renderDesktop = () => {
    return(
      <>
      </>
    )
  }

  const renderMobile = () => {
    return (
      <></>
    )
  }


  return (
    <ContainerLP >
      <div className='container-basic'>
        <SEOLP />
        <BannerLP />
      </div>

      <div className='w-full col-basic gap-1 mt-100'>
        <OtherProduct className='mt-40' />
        <ContainerWave className='animation_translate-3' style={{ width: '200%' }}>
          <SVGCustom width={'200vw'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none' >
            <path fill={BG_BTN.bgBlue1} className='elementor-shape-fill' d='M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z' />
          </SVGCustom>

        </ContainerWave>
      </div>
      <div className='w-full' style={{background:BG_BTN.bgBlue1, height:100}} />
    </ContainerLP>
  )
}
LandingPage.getInitialProps = ({query}) => {
  return { }
}
export default LandingPage
