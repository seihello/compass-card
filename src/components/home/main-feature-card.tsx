import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  title: string;
  icon: IconType;
  hasNotification: boolean;
}

export default function MainFeatureCard(props: Props) {
  return (
    <div className='indicator flex flex-col justify-center items-center gap-y-1 grow py-5 bg-blue-main rounded-md text-4xl'>
      {props.hasNotification && <span className='indicator-item badge right-1 top-1 bg-pink-main ' />}
      <props.icon className='text-white' />
      <p className='w-36 text-sm text-white text-center font-bold'>{props.title}</p>
    </div>
  )
}
