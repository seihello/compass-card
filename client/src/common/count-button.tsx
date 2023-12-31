import React, { cloneElement } from 'react'

type Props = {
  icon: JSX.Element;
  isEnable: boolean;
  onClick: () => void;
}

export default function CountButton(props: Props) {
  return (
    <div onClick={props.onClick} className={`p-2 ${props.isEnable && 'cursor-pointer'}`}>
      <div
        className={`
          p-1.5 rounded-full
          ${props.isEnable
            ? 'bg-blue-light text-blue-main active:bg-sky-active'
            : 'bg-gray-3 text-[#999999]'}
        `}
      >
        {cloneElement(props.icon, { className: 'text-sm' })}
      </div>
    </div>
  )
}
