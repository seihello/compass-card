'use client'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { PurchaseContext, PurchaseResult } from '@/context/purchase-context'

type PassOption = {
  title: string;
  price: number;
}

type Props = {
  passOptions: PassOption[];
  counters: number[];
}

export default function CheckoutBar(props: Props) {

  const router = useRouter();

  const { total, setTotal, setResult, setExpirationDate } = useContext(PurchaseContext);

  const handlePurchase = () => {
    if(total > 0) {
      setResult(PurchaseResult.Successful);
      const today = new Date();
      today.setMonth(today.getMonth() + 1)
      setExpirationDate(today);
      router.push('/purchase-complete');
    }
  }

  useEffect(() => {
    const sum = props.counters.reduce((accumulator, currentValue, index) => {
      return accumulator + props.passOptions[index].price * currentValue;
    }, 0)
    setTotal(sum);
  }, [props.counters, props.passOptions, setTotal])

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
      <button
        onClick={handlePurchase}
        className={`w-full h-12 ${total > 0 ? 'bg-blue-main active:bg-blue-active' : 'bg-gray-2'}  rounded-xl text-white`}
      >
        Checkout
      </button>
    </div>
  )
}
