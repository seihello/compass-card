import React from 'react'

type Props = {
  title: string;
  date: string;
}

export default function HistoryItem(props: Props) {
  return (
    <div className='flex flex-col space-between p-4 bg-gray-3 rounded-2xl'>
      <p className='text-gray-0'>{props.title}</p>
      <p className='text-gray-1'>{props.date}</p>
    </div>
  )
}
