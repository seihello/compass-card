import React, { cloneElement } from 'react'

type Props = {
  title: string;
  icon: JSX.Element;
}

export default function SubFeatureCard(props: Props) {
  return (
    <div className='flex flex-col justify-center items-center gap-y-1 grow py-3 bg-blue-light rounded-md text-4xl cursor-pointer'>
      {cloneElement(props.icon, {className: 'text-blue-main' })}
      <p className='w-16 text-sm text-blue-main text-center font-bold'>{props.title}</p>
    </div>
  )
}
