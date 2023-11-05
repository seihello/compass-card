'use client'
import React, { ReactNode, cloneElement } from 'react'
import { useRouter } from 'next/navigation';

type Props = {
  link: string;
  title: string;
  icon: JSX.Element;
  hasNotification: boolean;
}

export default function MainFeatureCard(props: Props) {

  const router = useRouter();

  return (
    <div
      onClick={() => router.push(props.link)}
      className='indicator flex flex-col justify-center items-center gap-y-1 grow py-5 bg-blue-main rounded-md text-4xl'
    >
      {props.hasNotification &&
        <span className='indicator-item badge right-1 top-1 bg-pink-main ' />
      }
      {cloneElement(props.icon, {className: 'text-white' })}
      <p className='w-36 text-sm text-white text-center font-bold'>
        {props.title}
      </p>
    </div>
  )
}
