import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  title: string;
  icon: IconType;
}

export default function MainFeatureCard(props: Props) {
  return (
    <div className='flex flex-col justify-center items-center gap-y-1 grow py-5 bg-blue-main rounded-md text-4xl'>
      <props.icon className='text-white'/>
      <p className='w-36 text-sm text-white text-center font-bold'>{props.title}</p>
    </div>
  )
}
