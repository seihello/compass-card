'use client'
import React, { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi'
import CountButton from '@/common/count-button'

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
        <p className='font-bold leading-4 dark:text-gray-3'>{props.title}</p>
        <p>${props.price.toFixed(2)}</p>
      </div>
      <div className='flex justify-between items-center gap-x-2'>
        <CountButton
          icon={<HiMinus />}
          isEnable={props.count > 0}
          onClick={() => props.setCounter(props.index, props.count - 1)}
        />
        <p className='w-4 text-center dark:text-gray-3'>{props.count}</p>
        <CountButton
          icon={<HiPlus />}
          isEnable={true}
          onClick={() => props.setCounter(props.index, props.count + 1)}
        />
      </div>
    </div>
  )
}
