import LoginForm from '@/components/public/auth/LoginForm'
import React from 'react'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className='w-full flex justify-center items-center min-h-fit'>
      <div className='flex flex-col gap-2 justify-center items-center shadow-2xl p-5 min-h-fit w-[35%]'>
        <h1 className='text-3xl font-light  text-center  tracking-wider'>LOGIN</h1>
        <LoginForm/>
      </div>
    </div>
  )
}

export default LoginPage