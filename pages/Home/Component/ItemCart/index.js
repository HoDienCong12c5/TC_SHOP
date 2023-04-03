import { images } from '@/common/images'
import { Row } from 'antd'
import React from 'react'
import Media from 'react-media'
import styles from './ItemCart.module.scss'
import ImageNext from '@/Components/ImageNext'
const dataFake = [
  {
    title:'Gaiyf',
    img:images.home.iconOrigin,
    price:1200000
  },
  {
    title:'coffe loại 1',
    img:images.home.logo,
    price:1200000
  }
]
const ItemCard = () => {
  const renderDesktop = () => {
    return <Row style={{gap:10}}>
      {
        dataFake.map(item=>{
          return (
            <div key={item} className={styles['container-item-cart']}>
              <ImageNext src={item.img} className={styles.img}/>
            </div>
          )
        })
      }
    </Row>
  }
  const renderMobile = () => {
    return <></>
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

export default ItemCard
