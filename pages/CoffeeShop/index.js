import useGetAllCoffee from '@/Hook/useGetAllCoffee'
import { Row } from 'antd'
import React from 'react'
import Media from 'react-media'
import { ContainerCoffeeShop } from './styled'
import Loading from '@/Components/MyLoading'
import Item from '@/Components/Item'
import { useRouter } from 'next/router'
import SEOCoffeeShop from './seo'

const CoffeeShop = ({title}) => {
  console.log({title});
  const router = useRouter()

  const {listAllNFT,loadingLitAllNFT} = useGetAllCoffee()

  const renderDesktop = () => {
    return <ContainerCoffeeShop className='w-full height-100vh'>
      {
        loadingLitAllNFT ? (
          <Loading width={'auto'}/>
        ) : (
          <Row >
            {
              listAllNFT.data.map(coffee=>(
                <Item
                  onClick={()=>router.push(`/CoffeeShop/${coffee?.name}--${coffee?.id}`)}
                  key={coffee}
                  item={coffee}
                />
              ))
            }

          </Row>
        )
      }

    </ContainerCoffeeShop>
  }
  const renderMobile = () => {
    return <></>

  }

  return (
    <>
      <SEOCoffeeShop />
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </>

  )
}

export default CoffeeShop
