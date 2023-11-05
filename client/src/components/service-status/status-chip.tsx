import React, { useEffect, useState, cloneElement } from 'react'
import { IoAlertCircle } from 'react-icons/io5'
import { BsXCircleFill } from 'react-icons/bs';
import { LineStatus } from '@/app/service-status/page';

type Props = {
  title: string;
  status: LineStatus;
}

export default function StatusChip(props: Props) {

  const [icon, setIcon] = useState<JSX.Element>();
  const [backgroundColor, setBackgroundColor] = useState<string>();

  useEffect(() => {
    switch (props.status) {
      case LineStatus.NotInService:
        setIcon(<BsXCircleFill className='text-pink-main' />);
        setBackgroundColor('bg-pink-light');
        break;
      case LineStatus.Delay:
        setIcon(<IoAlertCircle className='text-yellow-main text-xl' />);
        setBackgroundColor('bg-yellow-light');
        break;
      case LineStatus.OnSchedule:
        setIcon(<></>);
        setBackgroundColor('bg-green-light');
        break;
    }
  }, [props.status])

  return (
    <div className={`flex justify-center items-center gap-x-1 px-1.5 py-0.5 rounded-lg ${backgroundColor}`}>
      {icon && cloneElement(icon)}
      <p className='text-sm text-gray-0'>{props.title}</p>
    </div>
  )
}
