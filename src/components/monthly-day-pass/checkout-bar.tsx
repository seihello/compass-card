'use client'
import React, { useState, useEffect } from 'react'

type PassOption = {
  title: string;
  price: number;
}

type Props = {
  passOptions: PassOption[];
  counters: number[];
}

export default function CheckoutBar(props: Props) {

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const sum = props.counters.reduce((accumulator, currentValue, index) => {
      return accumulator + props.passOptions[index].price * currentValue;
    }, 0)
    setTotal(sum);
  }, [props.counters, props.passOptions])


  return (
    <div
      className='w-full flex flex-col gap-y-4 fixed bottom-0 p-4 bg-white shadow'
      style={{
        boxShadow: '0px 0px 10px 0px #0000000F'
      }}
    >
      <div className='flex justify-between items-center'>
        <p className='text-gray-1'>Total</p>
        <p className='text-lg text-gray-0 font-bold'>$ {total.toFixed(2)}</p>
      </div>
      <button className={`w-full h-12 ${total > 0 ? 'bg-blue-main' : 'bg-gray-2'} rounded-xl text-white`}>
        Checkout
      </button>
    </div>
  )
}
