import { ICON_PAGE_PROFILE, PAGE_PROFILE } from '@/common/constant';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react'
import UserDetail from './userDetail';
import { ButtonMenu, ContainerMyProfile } from './styled';
import { LeftMyProfile } from './styled';
import { RightMyProfile } from './styled';
import ImageNext from '@/Components/ImageNext';
import ButtonBasic from '@/Components/ButtonBasic';
import { NormalText } from '@/Components/TextSize';
import { Menu } from 'antd';
import styles from './MintNFT.module.scss'
const MyProfile = ({keyPage}) => {
  const route = useRouter()
  useEffect(() => {
    if(Object.values(PAGE_PROFILE).includes(keyPage)){
    }else{
      route.push('/')
    }
  }, []);
  const pageSelected = useMemo(() => {
    if(Object.values(PAGE_PROFILE).includes(keyPage)){
      switch (keyPage) {
      case PAGE_PROFILE.myProfile:
        return <UserDetail />
      default:
        return <UserDetail />
      }
    }else{
      route.push('/')
    }
  }, [])
  const renderMenu = () => {
    return <LeftMyProfile>
      <Menu >
        {
          Object.keys(PAGE_PROFILE).map(menu=>{
            return <ButtonMenu className={styles['btn-menu-main']} key={PAGE_PROFILE[`${menu}`]} >
              <div className='flex gap-10 w-full align-center justify-start  '>
                <ImageNext className={'w-30 h-30'} size={25} src={ICON_PAGE_PROFILE[`${menu}`]}/>
                <div className='text-capitalize hover hover__text-underline' >{(PAGE_PROFILE[`${menu}`]).replace('-',' ')}</div>
              </div>
            </ButtonMenu>

          })
        }
      </Menu>

    </LeftMyProfile>
  }
  return (
    <ContainerMyProfile className='container-basic'>
      {renderMenu()}
      <RightMyProfile >
        {
          pageSelected
        }
      </RightMyProfile>

    </ContainerMyProfile>
  )
}
export async function getServerSideProps({query}) {
  const {keyPage} = query
  return {
    props:{
      keyPage
    }
  }
}
export default MyProfile
