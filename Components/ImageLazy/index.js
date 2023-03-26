import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import styled from 'styled-components'
const LazyLoadImageCustoms = styled(LazyLoadImage)`
  width:100%;
    height:100%;
`
const ImageLazy = ({ className = '', draggable = false, alt, src, width, height, effect = 'blur', style, ...props }) => {
  return (
    <LazyLoadImageCustoms
      className={className}
      draggable={draggable}
      alt={src}
      src={src} // use normal <img> attributes as props
      width={width}
      effect={effect}
      style={style}
      height={height}
      {...props}
    />
  )
}

export default ImageLazy
