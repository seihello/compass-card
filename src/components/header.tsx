'use client'
import React, { useContext } from 'react'
import { HeaderContext } from '@/context/header-context';

export default function Header() {

  const { title } = useContext(HeaderContext);

  return (
    <div
      className='container w-full h-14 mb-1 flex justify-center items-center bg-white'
      style={{
        boxShadow: title && '0px 0px 10px 0px #0000000A'
      }}
    >
      <h6 className='text-gray-0 text-center font-bold'>{title}</h6>
    </div>
  )
}
