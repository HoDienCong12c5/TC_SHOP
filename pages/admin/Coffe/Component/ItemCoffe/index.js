import ImageNext from '@/Components/ImageNext';
import React from 'react'
import Media from 'react-media';
import styled from 'styled-components';
const ConItemCoffee = styled.div`
  ;
`;
const ImgCartItem = styled(ImageNext)`
  height: 100%;
  width: auto !important;
  max-height: 100px;
  width: fit-content;
`;
const ItemCoffee = ({
  coffee,
  onCLick,

}) => {

  const renderDesktop = () => {
    return <>
    </>
  }
  const renderMobile = () => {
    return <>
    </>
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

export default ItemCoffee
