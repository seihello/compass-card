'use client'
import React, { useState, useEffect, useContext } from 'react'
import PassOptionBox from '@/components/monthly-day-pass/pass-option'
import CheckoutBar from '@/components/monthly-day-pass/checkout-bar'

export type PassOption = {
  title: string;
  price: number;
  count: number;
  setCount: (count: number) => void;
}

enum PassType {
  Monthly,
  Day
}

const passOptions = [
  {
    title: 'Zone 1',
    price: 102.55,
    type: PassType.Monthly
  },
  {
    title: 'Zone 2',
    price: 137.10,
    type: PassType.Monthly
  },
  {
    title: 'Zone 3',
    price: 185.20,
    type: PassType.Monthly
  },
  {
    title: 'Concession',
    price: 58.60,
    type: PassType.Monthly
  },
  {
    title: '1 Time Payment All Day Long Riding',
    price: 10.75,
    type: PassType.Day
  },
]

export default function MonthlyDayPass() {

  const [counters, setCounters] = useState<number[]>(new Array(passOptions.length).fill(0));

  const setCounter = (index: number, value: number) => {
    if (index < counters.length && counters[index] + value >= 0) {
      const newCounters = [...counters];
      newCounters[index] = value;
      setCounters(newCounters);
    }
  }

  return (
    <>
      <h4 className='text-gray-0 font-bold w-full'>Monthly Pass</h4>
      {passOptions.map((passOption, index) => passOption.type === PassType.Monthly && (
        <PassOptionBox
          key={index}
          index={index}
          title={passOption.title}
          price={passOption.price}
          count={counters[index]}
          setCounter={setCounter} />
      ))}
      <hr className='w-full bg-gray-2' />
      <h4 className='text-gray-0 font-bold w-full'>Day Pass</h4>
      {passOptions.map((passOption, index) => passOption.type === PassType.Day && (
        <PassOptionBox
          key={index}
          index={index}
          title={passOption.title}
          price={passOption.price}
          count={counters[index]}
          setCounter={setCounter} />
      ))}
      <hr className='w-full bg-gray-2' />
      <CheckoutBar passOptions={passOptions} counters={counters} />
    </>
  )
}
