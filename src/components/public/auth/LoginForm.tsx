'use client'
import { SelectDropDown } from '@/components/reusableComponents/SelectDropDown'
import { DatePicker } from '@/components/reusableComponents/DatePicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { genderData } from '@/lib/data/dummyData'
import { GenderType } from '@/types/client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'

type Props = {}

const LoginForm = (props: Props) => {
  const [date, setDate] = useState<Date>()
  const [gender,setGender] = useState<"Male"|"Female"|"Other"|string>("")
  console.log(gender);
  
  return (
    <form className='min-h-[55vh] flex flex-col justify-start items-center gap-4 w-full'>
        <div className='w-[75%] flex flex-col items-center mt-10 gap-2'>
            <Label className='self-start'>Gender</Label>
            <SelectDropDown selectedValue={gender} setSelectedValue={setGender} header='Gender..' data={genderData} />
        </div>
        <div className='w-[75%] flex flex-col items-center gap-2 mb-12'>
          <Label className='self-start'>Date</Label>
          <DatePicker date={date} setDate={setDate}/>
        </div>
        <div className='flex flex-col gap-1 w-[75%]'>
          <p className='text-sm text-gray-500'>Already sign in</p>
          <Button variant={"outline"} className='w-full border-gray-400 rounded-md flex gap-1 justify-between items-center p-0'>
            <FcGoogle size={25} className='flex-1 px-1'/>
            <span className='bg-blue-500 text-white h-full  flex items-center px-4 flex-[5] justify-center'>
              Sign in with google
            </span>
          </Button>
        </div>
        <Button className='w-[80%] mx-auto flex justify-start' asChild variant={"link"}>
          <Link href={"/auth/sign-up"}>new, register now</Link>
        </Button>
    </form>
  )
}

export default LoginForm