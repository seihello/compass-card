import React from 'react'
import CommonCard from './common-card'

export default function RegularPassCard() {
  return (
    <CommonCard title="John's Compass Card" subTitle='' borderColor='border-yellow-main'>
      <div className='text-sm text-gray-1'>
        <p>Monthly Pass <span className='font-bold'>Zone1 </span>exp. <span className='font-bold'>May 31</span></p>
        <p>Balance <span className='font-bold'>$10.05</span></p>
        <p>Last Used <span className='font-bold'>May 24 2023 08.31AM</span></p>
      </div>
    </CommonCard>
  )
}
