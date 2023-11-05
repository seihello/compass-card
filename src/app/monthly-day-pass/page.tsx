import React from 'react'
import PassOption from '@/components/monthly-day-pass/pass-option'

export default function MonthlyDayPass() {
  return (
    <>
      <h4 className='text-gray-0 font-bold w-full'>Monthly Pass</h4>
      <PassOption title='Zone 1' price={102.55} />
      <PassOption title='Zone 2' price={137.10} />
      <PassOption title='Zone 3' price={185.20} />
      <PassOption title='Concession' price={58.60} />
      <hr className='w-full bg-gray-2' />
    </>
  )
}
