import React from 'react'

type Props = {
  total: number;
}

export default function CheckoutBar(props: Props) {
  return (
    <div
      className='w-full flex flex-col gap-y-4 fixed bottom-0 p-4 bg-white shadow'
      style={{
        boxShadow: '0px 0px 10px 0px #0000000F'
      }}
    >
      <div className='flex justify-between items-center'>
        <p className='text-gray-1'>Total</p>
        <p className='text-lg text-gray-0 font-bold'>$ {props.total.toFixed(2)}</p>
      </div>
      <button className={`w-full h-12 ${props.total > 0 ? 'bg-blue-main' : 'bg-gray-2'} rounded-xl text-white`}>
        Checkout
      </button>
    </div>
  )
}
