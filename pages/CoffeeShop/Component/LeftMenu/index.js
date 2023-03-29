import React from 'react'
import Media from 'react-media'

const LeftMenu = () => {
  const renderDesktop = () => {
    return <div className='container-basic height-100vh '>

    </div>
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

export default LeftMenu
