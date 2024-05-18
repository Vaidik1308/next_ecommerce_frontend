import React from 'react'

type Props = {
    params:{transactionId:string}
}

const SingleTransactionPage = ({params}: Props) => {
  return (
    <div>{params.transactionId}</div>
  )
}

export default SingleTransactionPage