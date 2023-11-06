import React from 'react'
import { FiCalendar, FiDollarSign, FiInfo, FiCreditCard, FiGift, FiUser } from 'react-icons/fi'
import { PiClockCounterClockwiseBold, PiChatCircleBold } from 'react-icons/pi';
import MainFeatureCard from '@/components/home/main-feature-card'
import SubFeatureCard from '@/components/home/sub-feature-card'

export default function FeatureSection() {

  return (
    <>
      <div className='w-full flex justify-stretch gap-x-4'>
        <MainFeatureCard link='/monthly-day-pass' title='Monthly / Day Pass' icon={<FiCalendar />} hasNotification={true} isEnabled={true} />
        <MainFeatureCard link='' title='Stored Value' icon={<FiDollarSign />} hasNotification={false} isEnabled={false} />
      </div>
      <div className='w-full flex justify-stretch gap-x-4'>
        <SubFeatureCard link='/service-status' title='Service Status' icon={<FiInfo />} isEnabled={true} />
        <SubFeatureCard link='' title='Lost / Stolen' icon={<FiCreditCard />} isEnabled={false} />
        <SubFeatureCard link='' title='Eco Reward' icon={<FiGift />} isEnabled={false} />
      </div>
      <div className='w-full flex justify-stretch gap-x-4'>
        <SubFeatureCard link='' title='Transit History' icon={<PiClockCounterClockwiseBold />} isEnabled={false} />
        <SubFeatureCard link='' title='Contact' icon={<PiChatCircleBold />} isEnabled={false} />
        <SubFeatureCard link='' title='My Page' icon={<FiUser />} isEnabled={false} />
      </div>
    </>
  )
}
