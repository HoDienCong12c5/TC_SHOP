import React,{useState,useEffect} from 'react'
import Image from '@/Components/ImageBasic'
import Media from 'react-media'
import ContainerFooter, {
  Left,
  Right,
  About,
  AboutDetails,
  DesAbout,
  Des,
  ContainerMoreLink
} from './styled'
import img from '@/common/images'
// import GGMap from './components/ggMap'
import firebase from '@/Services/FirebaseService'
import Loading from '@/Components/MyLoading'
import { useSelector } from 'react-redux'

const Footer = () => {
  const message = useSelector(state => state.locale.messages)

  const [dataContact, setDataContact] = useState(null)
  useEffect(() => {
    const getData = async () => {
      const res = await firebase.storeContact.getAllData()
      console.log('====================================')
      console.log({res})
      console.log('====================================')
      if (res) {
        setDataContact(res[0])
      }
    }
    getData()
  }, [])
  const renderMoreLink = () => {
    const lisIcon = [
      {
        link: 'https://github.com/HoDienCong12c5',
        icon: img.footer.iconGithub,
        isTab:true
      },
      {
        link: 'https://www.facebook.com/profile.php?id=100080400793331',
        icon: img.footer.iconFace,
        isTab:true
      },
      {
        link: 'https://www.instagram.com/hodiencong/',
        icon: img.footer.iconIntagram,
        isTab:true
      },
      {
        link: 'https://www.linkedin.com/in/c%C3%B4ng-h%E1%BB%93-di%C3%AAn-b3618a225/',
        icon: img.footer.iconLinkedin,
        isTab:true
      },
      {
        link: 'https://www.tiktok.com/@hodiencong12c5',
        icon: img.footer.iconTitok,
        isTab:true
      },
      {
        link: 'https://www.youtube.com/channel/UC4gi_FRKga2hVjTK1Ol1PnA',
        icon: img.footer.iconYoutube,
        isTab:true
      },
      {
        link:`mailto:${dataContact?.gmail}?subject = Feedback&body = Message`,
        icon:img.footer.iconGmail
      }
    ]
    return (
      <ContainerMoreLink >
        {
          lisIcon.map(item => (
            <Des className='hasHover' key={item.icon} isHover>
              <a href={item.link} target={item?.isTab && '_blank'}>
                <Image src={item.icon} height={30} width={30} />
              </a>
            </Des>
          ))
        }
      </ContainerMoreLink>
    )
  }
  const renderAboutDetails = () => (
    <AboutDetails >
      <DesAbout >
        <Image src={img.footer.iconNumberPhone} height={25} width={25} />
        {dataContact?.sdt}
      </DesAbout>
      <DesAbout >
        <Image src={img.footer.iconGmail} height={25} width={25} />
        {dataContact?.gmail}
      </DesAbout>
      <DesAbout >
        <Image src={img.footer.iconAddress} height={25} width={25} />
        {dataContact?.address}
      </DesAbout>
      <DesAbout >
        <Image src={img.footer.iconAddress} height={25} width={25} />
          Thôn thanh giáo, IAKREL, Đức Cơ, Gia Lai
      </DesAbout>

    </AboutDetails>
  )
  const renderMobile = () => {
    return (
      <div className={'padding'} >
        {/* <GGMap/> */}
      </div>
    )
  }
  const renderDesktop = () => {
    return (
      <ContainerFooter className={'padding'} >
        <Left >
          <About > {message.footer.aboutContact}  </About>
          <br />
          {
            dataContact ? renderAboutDetails() : (<Loading />)
          }
          {
            dataContact ? renderMoreLink() : (<Loading />)
          }

          <Des >
            {/* <Image src={''} height={35} width={35}/> */}
          </Des>
        </Left>
        <Right>
          {/* <GGMap dataContact={dataContact}/> */}
        </Right>
      </ContainerFooter>
    )
  }
  return (
    <Media query='(min-width: 768px)'>
      {(match) => {
        if (match) {
          return renderDesktop()
        }
        return renderDesktop()
      }}
    </Media>
  )
}
export default Footer
