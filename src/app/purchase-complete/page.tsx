import React from 'react'
import Link from 'next/link';
import { BsCheckCircleFill } from 'react-icons/bs'

type Props = {
  productType: string;
  total: number;
  expirationDate: Date;
}

export default function PurchaseComplete(props: Props) {

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-y-10'>
      <div className='flex flex-col justify-center items-center gap-y-6'>
        <h4 className='max-w-[90%] font-bold text-center text-gray-0'>You have purchased montly pass!</h4>
        <BsCheckCircleFill className='text-6xl text-blue-main' />
        <div className='flex flex-col justify-center items-center text-gray-1'>
          {/* <p>Zone 1</p> */}
          <p>$ 102.55</p>
          <p>Valid until <span className='font-bold'>June 31, 2023</span></p>
        </div>
      </div>
      <Link href='/'>
        <p className='text-blue-main font-bold underline'>
          Back to the top page
        </p>
      </Link>
    </div>
  )
}
