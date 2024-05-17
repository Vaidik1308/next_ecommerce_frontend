import React from 'react'

type Props = {
    params:{productId:string}
}

const SingleProductPage = ({params}: Props) => {
  return (
    <div>{params.productId}</div>
  )
}

export default SingleProductPage