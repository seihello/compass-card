import { FiCalendar, FiDollarSign, FiInfo, FiCreditCard, FiGift, FiUser } from 'react-icons/fi'
import { PiClockCounterClockwiseBold, PiChatCircleBold } from 'react-icons/pi';
import BasicInfoCard from '@/components/home/basic-info-card'
import RegularPassCard from '@/components/home/regular-pass-card'
import MainFeatureCard from '@/components/home/main-feature-card'
import SubFeatureCard from '@/components/home/sub-feature-card'

export default function Home() {
  return (
    <>
      <h1 className='w-full text-left text-blue-main font-bold'>Hi, John!</h1>
      <BasicInfoCard />
      <RegularPassCard />
      <div className='w-full flex justify-stretch gap-x-4'>
        <MainFeatureCard title='Monthly / Day Pass' icon={FiCalendar} hasNotification={true} />
        <MainFeatureCard title='Stored Value' icon={FiDollarSign} hasNotification={false} />
      </div>
      <div className='w-full flex justify-stretch gap-x-4'>
        <SubFeatureCard title='Service Status' icon={FiInfo} />
        <SubFeatureCard title='Lost / Stolen' icon={FiCreditCard}  />
        <SubFeatureCard title='Eco Reward' icon={FiGift}  />
      </div>
      <div className='w-full flex justify-stretch gap-x-4'>
        <SubFeatureCard title='Transit History' icon={PiClockCounterClockwiseBold} />
        <SubFeatureCard title='Contact' icon={PiChatCircleBold}  />
        <SubFeatureCard title='My Page' icon={FiUser}  />
      </div>
    </>
  )
}
