'use client'
import React, { cloneElement } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  title: string;
  link: string;
  icon: JSX.Element;
  isEnabled: boolean;
}

export default function SubFeatureCard(props: Props) {

  const router = useRouter();

  return (
    <div
      onClick={props.isEnabled ? () => router.push(props.link) : () => {}}
      className={`
      flex flex-col justify-center items-center gap-y-1 grow py-3 
      bg-blue-light active:bg-sky-active rounded-md text-4xl cursor-pointer
      ${!props.isEnabled && 'opacity-50'}
    `}
    >
      {cloneElement(props.icon, { className: 'text-blue-main' })}
      <p className='w-16 text-sm text-blue-main text-center font-bold'>{props.title}</p>
    </div>
  )
}
