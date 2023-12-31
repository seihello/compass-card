import React from 'react'

type Props = {
  title: string;
  subTitle: string;
  borderColor: string;
  children: React.ReactNode;
}

export default function CommonCard(props: Props) {

  return (
    <div className={`flex flex-col gap-y-6 w-full px-4 py-8 bg-blue-verylight border-t-8 ${props.borderColor} dark:bg-gray-0 shadow dark:shadow-gray-1 rounded`}>
      <div className="flex items-center gap-x-2 text-blue-main">
        <img src='/compass_logo.png' className='w-10 h-auto' />
        <div>
          <h4 className="font-bold">{props.title}</h4>
          { props.subTitle && <p className='text-sm'>{props.subTitle}</p> }
        </div>
      </div>
      {props.children}
    </div>
  )
}
