'use client'
import React, { ReactNode, cloneElement } from 'react'
import { useRouter } from 'next/navigation';

type Props = {
  link: string;
  title: string;
  icon: JSX.Element;
  hasNotification: boolean;
  isEnabled: boolean;
}

export default function MainFeatureCard(props: Props) {

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(props.link)}
      className={`
        indicator flex flex-col justify-center items-center gap-y-1 grow py-5
        bg-blue-main rounded-md text-4xl cursor-pointer
        ${!props.isEnabled && 'opacity-50'}
      `}
    >
      {props.hasNotification &&
        <span className='indicator-item badge w-6 h-6 right-1 top-1 rounded-full bg-pink-main border-2 border-white' />
      }
      {cloneElement(props.icon, { className: 'text-white' })}
      <p className='w-36 text-sm text-white text-center font-bold'>
        {props.title}
      </p>
    </div>
  )
}
