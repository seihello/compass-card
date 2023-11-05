import React from 'react'
import PassOption from '@/components/monthly-day-pass/pass-option'
import CheckoutBar from '@/components/monthly-day-pass/checkout-bar'

export default function MonthlyDayPass() {
  return (
    <>
      <h4 className='text-gray-0 font-bold w-full'>Monthly Pass</h4>
      <PassOption title='Zone 1' price={102.55} />
      <PassOption title='Zone 2' price={137.10} />
      <PassOption title='Zone 3' price={185.20} />
      <PassOption title='Concession' price={58.60} />
      <hr className='w-full bg-gray-2' />
      <h4 className='text-gray-0 font-bold w-full'>Day Pass</h4>
      <PassOption title='1 Time Payment All Day Long Riding' price={10.75} />
      <hr className='w-full bg-gray-2' />
      <CheckoutBar total={10}/>
    </>
  )
}
