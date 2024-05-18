import React from 'react'

type Props = {
    params:{customerId:string}
}

const SingleCustomerId = ({params}: Props) => {
  return (
    <div>{params.customerId}</div>
  )
}

export default SingleCustomerId