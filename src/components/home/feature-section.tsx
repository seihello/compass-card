import React from 'react'
import { FiCalendar, FiDollarSign, FiInfo, FiCreditCard, FiGift, FiUser } from 'react-icons/fi'
import { PiClockCounterClockwiseBold, PiChatCircleBold } from 'react-icons/pi';
import MainFeatureCard from '@/components/home/main-feature-card'
import SubFeatureCard from '@/components/home/sub-feature-card'

export default function FeatureSection() {
  return (
    <>
      <div className='w-full flex justify-stretch gap-x-4'>
        <MainFeatureCard title='Monthly / Day Pass' icon={FiCalendar} hasNotification={true} />
        <MainFeatureCard title='Stored Value' icon={FiDollarSign} hasNotification={false} />
      </div>
      <div className='w-full flex justify-stretch gap-x-4'>
        <SubFeatureCard title='Service Status' icon={FiInfo} />
        <SubFeatureCard title='Lost / Stolen' icon={FiCreditCard} />
        <SubFeatureCard title='Eco Reward' icon={FiGift} />
      </div>
      <div className='w-full flex justify-stretch gap-x-4'>
        <SubFeatureCard title='Transit History' icon={PiClockCounterClockwiseBold} />
        <SubFeatureCard title='Contact' icon={PiChatCircleBold} />
        <SubFeatureCard title='My Page' icon={FiUser} />
      </div>
    </>
  )
}
