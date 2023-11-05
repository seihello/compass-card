'use client'
import React, { useState } from 'react'
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6'

type Props = {
  title: string;
  price: number;
}

export default function PassOption(props: Props) {

  const [count, setCount] = useState(0);

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex flex-col text-gray-0'>
        <p className='font-bold'>{props.title}</p>
        <p>${props.price}</p>
      </div>
      <div className='flex justify-between items-center gap-x-4'>
        <FaCircleMinus
          className='text-2xl text-gray-2'
          onClick={() => {
            if (count - 1 >= 0) setCount(count - 1)
          }}
        />
        <p className='w-4 text-center'>{count}</p>
        <FaCirclePlus
          className='text-2xl text-blue-main'
          onClick={() => setCount(count + 1)}
        />
      </div>
    </div>
  )
}
