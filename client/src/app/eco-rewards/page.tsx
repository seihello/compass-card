import React from 'react'
import RewardsHistorySection from '@/components/eco-rewards/rewards-history-section'

export default function EcoRewardsPage() {
  return (
    <div className='w-full flex flex-col gap-y-6'>
      <h1 className='w-full text-left text-gray-0 font-bold'>Buy A Monthly Pass, Get A Day Pass</h1>
      <p>When you buy 1 monthly pass, you can get 1 day free ride on any TransLink transportation by redeem your credit.</p>
      
      <RewardsHistorySection />
    </div>
  )
}
