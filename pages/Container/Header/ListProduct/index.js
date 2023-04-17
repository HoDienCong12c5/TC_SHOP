import useGetAllCoffee from '@/Hook/useGetAllCoffee'
import React, { useEffect, useState } from 'react'
import Media from 'react-media'
import { ContainerItemProduct, ContainerListProduct, Discus, ImagProduct, PriceProduct } from './styled'
import { Slide, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MyLoading from '@/Components/MyLoading';
import { numberWithCommas } from '@/Utils/function';
import { Row } from 'antd';
import { MediumText, NormalText, TitleText } from '@/Components/TextSize';
import { PriceItem } from '@/Components/Item';
import { useRouter } from 'next/router';
import NoData from '@/Components/NoData'
import Aos from 'aos'
import { useSelector } from 'react-redux';

const ListProduct = ({
  title,
  data,
  typeProduct = 'coffee'
}
) => {
  const message = useSelector(state => state.locale.messages)

  const router = useRouter()


  const {listAllNFT,loadingLitAllNFT} = useGetAllCoffee()
  const [listData, setListData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({ duration: 2500 })
  }, [])

  useEffect(() => {
    if(listAllNFT?.data?.length > 0 && typeProduct === 'coffee'){
      console.log({listAllNFT:listAllNFT?.data});
      const arrTemp = listAllNFT?.data
      if(arrTemp?.length < 15){
        setListData([...arrTemp,...arrTemp,...arrTemp,...arrTemp])
      }else{
        const arr = listAllNFT?.data.slice(0,15)
        setListData(arr)
      }
      setLoading(false)
    }else{
      setLoading(false)
    }

  }, [listAllNFT?.data,loadingLitAllNFT])

  const renderDesktop = () => {
    const onClick = (item) => {
      if(item.amount - item.sell > 1){
        router.push(`/CoffeeShop/${item?.name}--${item?.id}`)
      }
    }
    return <div className='flex gap-35'>
      {
        listData?.map(item=>{
          return (
            <ContainerItemProduct
              key={item}
              className={'hover hover__zoom'}
              onClick={()=>onClick(item)}>
              <ImagProduct src={item.image_main} alt={item.name} />
              <Discus >
                {`${item?.discus ?? 15} %`}
              </Discus>
              <div
                className={'mt-10'}
                style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}
              >
                <MediumText textTransform>
                  {item.name}
                </MediumText>
                <NormalText className={'text-decoration op-0_0'}>
                  {`đ. ${numberWithCommas(item.price * (item?.discus ?? 1.15))}`}
                </NormalText>
                <Row align={'middle'}>
                  <NormalText>đ.</NormalText>
                  <PriceItem className='mb-10'>
                    {`${numberWithCommas(item.price)}`}
                  </PriceItem>
                </Row>
              </div>
            </ContainerItemProduct>
          )
        })
      }
    </div>
  }

  const renderMobile = () => {
    return <></>
  }
  return (
    <ContainerListProduct >
      <Row align={'middle'} style={{position:'relative'}} className='mb-20'>
        <TitleText className='pr-10'
          fontWeight='normal'
          textTransform
        >
          {title}
        </TitleText>
        <div style={{display:'flex', flex:1, border:'1px solid', height:1}}></div>
      </Row>
      {
        loading ? (
          <MyLoading />
        ) : (
          listData?.length > 0 ? (
            <Media query='(min-width: 768px)'>
              {(match) => {
                if (match) {
                  return renderDesktop()
                }
                return renderMobile()
              }}

            </Media>
          ) : (
            <NoData/>
          )

        )
      }
    </ContainerListProduct>


  )
}

export default ListProduct
