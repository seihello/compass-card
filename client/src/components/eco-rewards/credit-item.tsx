import React from 'react'

type Props = {
  index: number;
  selectedIndex: number;
  title: string;
  date: string;
}

export default function CreditItem(props: Props) {

  const left = 50 + 70 * (props.index - props.selectedIndex);
  // const leftPercent = 

  return (
    <div
      className={`w-[65%] absolute top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col space-between gap-y-2 p-4 bg-blue-light rounded-xl`}
      style={{
        left: `${left}%`,
        transition: 'left 0.2s'
      }}
    >
      <p className='text-gray-0 font-bold'>{props.title}</p>
      <p className='text-gray-1'>{props.date}</p>
      <button className='py-2 bg-blue-main text-white font-bold rounded-xl'>Redeem</button>
    </div>
  )
}
