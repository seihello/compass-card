import Image from 'next/image'
import BasicInfoCard from '@/components/home/basic-info-card'
import RegularPassCard from '@/components/home/regular-pass-card'
import CommonCard from '@/components/home/common-card'

export default function Home() {
  return (
    <>
      <h1 className='w-full text-left text-blue-main font-bold'>Hi, John!</h1>
      <BasicInfoCard />
      <RegularPassCard />
    </>
  )
}
