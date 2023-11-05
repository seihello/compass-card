import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  title: string;
  icon: IconType;
}

export default function SubFeatureCard(props: Props) {
  return (
    <div className='flex flex-col justify-center items-center gap-y-1 grow py-3 bg-blue-light rounded-md text-4xl'>
      <props.icon className='text-blue-main' />
      <p className='w-16 text-sm text-blue-main text-center font-bold'>{props.title}</p>
    </div>
  )
}
