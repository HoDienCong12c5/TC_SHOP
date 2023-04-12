import React, { useEffect, useState } from 'react'

const CoffeeDetail = ({name}) => {
  const [coffeeDetail, setCoffeeDetail] = useState(null)

  useEffect(() => {



  }, [])

  return (
    <div>CoffeeDetail</div>
  )
}
export const getServerSideProps = ({query}) => {
  const {name} = query
  return { props: {name} }
}
export default CoffeeDetail
