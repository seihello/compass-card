'use client'
import React, { useContext } from 'react'
import Link from 'next/link';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs'
import { PurchaseContext, PurchaseResult } from '@/context/purchase-context';

export default function PurchaseComplete() {

  const { result, total, expirationDate } = useContext(PurchaseContext);

  return (
    <div className='py-24 flex flex-col justify-center items-center gap-y-10'>
      <div className='flex flex-col justify-center items-center gap-y-6'>
        <h4 className='max-w-[90%] font-bold text-center text-gray-0'>
          {result === PurchaseResult.Successful
            ? 'You have purchased montly pass!'
            : 'Failed to purchase monthly pass'}
        </h4>
        {result === PurchaseResult.Successful
          ? <BsCheckCircleFill className='text-6xl text-blue-main' />
          : <BsXCircleFill className='text-6xl text-pink-main' />}

        {result === PurchaseResult.Successful &&
          <div className='flex flex-col justify-center items-center text-gray-1'>
            {/* <p>Zone 1</p> */}
            <p>$ {total.toFixed(2)}</p>
            <p>Valid until <span className='font-bold'>{
              `${expirationDate.toLocaleDateString('en-US', { month: 'short' })} ${expirationDate.getDate()}, ${expirationDate.getFullYear()}`
            }</span></p>
          </div>
        }
      </div>
      <Link href='/'>
        <p className='text-blue-main font-bold underline'>
          Back to the top page
        </p>
      </Link>
    </div>
  )
}
