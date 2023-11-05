'use client'
import React from 'react'
import Link from 'next/link'
import { StatusMap, LineStatus } from '@/common/line-status'
import StatusChip from './status-chip'

type Props = {
  transport: string;
  lineStatusList: StatusMap;
}

export default function ServiceStatusSummary(props: Props) {

  return (
    <div className='flex flex-col gap-6'>
      <h5 className='text-gray-0 font-bold w-full'>{props.transport}</h5>
      <div className='flex gap-x-1'>
        {Object.keys(props.lineStatusList).map((key: string, index: number) => (
          <StatusChip key={index} title={key} status={props.lineStatusList[key]} />
        ))}
      </div>
      <p className='text-sm text-blue-main text-right font-bold underline opacity-50'>Search more routes</p>
    </div>
  )
}
