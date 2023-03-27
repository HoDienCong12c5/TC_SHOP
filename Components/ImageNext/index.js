import Image from 'next/image'
import React from 'react'
import styled from 'styled-components';
const ImgCustom = styled(Image)`

`;
const ImageNext = ({
  src,
  alt = null,
  className,
  width,
  height,
  ...props
}) => {
  return (
    <ImgCustom
      src={src}
      alt={alt ?? src}
      className={className}
      height={475}
      width={700}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      blurDataURL="URL"
      placeholder="blur"
      {...props}
    />
  )
}

export default ImageNext
