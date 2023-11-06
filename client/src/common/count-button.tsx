import React, { cloneElement } from 'react'

type Props = {
  icon: JSX.Element;
  isEnable: boolean;
  onClick: () => void;
}

export default function CountButton(props: Props) {
  return (
    <div onClick={props.onClick} className='p-2'>
      <div
        className={`
          p-1.5 rounded-full
          ${props.isEnable ? 'bg-blue-light text-blue-main' : 'bg-gray-3 text-[#BBBBBB]'}
        `}
      >
        {cloneElement(props.icon, { className: 'text-sm' })}
      </div>
    </div>
  )
}
