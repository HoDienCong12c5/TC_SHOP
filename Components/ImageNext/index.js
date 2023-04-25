import Image from 'next/image'
import React from 'react'
import styled from 'styled-components';
// import sharp from 'sharp';
const ImgCustom = styled(Image)`
`;
const ImageNext = ({
  src,
  alt = null,
  className,
  size = null,
  ...props
}) => {
  // const convertSharp = ()=>{
  //   return sharp(src)
  // }
  return (
    <ImgCustom
      src={src}
      alt={alt ?? src}
      height={475}
      width={700}
      sizes={size ?? '100vw'}
      style={{
        width: '100%',
        height: 'auto',
      }}
      blurDataURL="URL"
      placeholder="blur"
      className={className}

      {...props}
    />
  )
}

export default ImageNext
