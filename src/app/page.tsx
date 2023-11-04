import Image from 'next/image'
import BasicInfoCard from '@/components/home/basic-info-card'
import RegularPassCard from '@/components/home/regular-pass-card'
import MainFeatureCard from '@/components/home/main-feature-card'
import { FiCalendar, FiDollarSign } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <h1 className='w-full text-left text-blue-main font-bold'>Hi, John!</h1>
      <BasicInfoCard />
      <RegularPassCard />
      <div className='w-full flex justify-stretch gap-x-6'>
        <MainFeatureCard title='Monthly / Day Pass' icon={FiCalendar} />
        <MainFeatureCard title='Stored Value' icon={FiDollarSign}  />
      </div>
    </>
  )
}
