'use client'
import React, { useState } from 'react'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'
import { PassOption } from '@/app/monthly-day-pass/page'
import { count } from 'console'

type Props = {
  index: number;
  title: string;
  price: number;
  count: number;
  setCounter: (index: number, value: number) => void;
}

export default function PassOptionBox(props: Props) {

  return (
    <div className='w-full flex justify-between gap-x-8 items-center'>
      <div className='flex flex-col text-gray-0'>
        <p className='font-bold leading-4'>{props.title}</p>
        <p>${props.price.toFixed(2)}</p>
      </div>
      <div className='flex justify-between items-center gap-x-4'>
        <FaCircleMinus
          className='text-2xl text-gray-2'
          onClick={() => props.setCounter(props.index, props.count - 1)}
        />
        <p className='w-4 text-center'>{props.count}</p>
        <FaCirclePlus
          className='text-2xl text-blue-main'
          onClick={() => props.setCounter(props.index, props.count + 1)}
        />
      </div>
    </div>
  )
}
