'use client'
import React, { useState, useEffect, useContext } from 'react'
import { HeaderContext } from '@/context/header-context'
import ServiceStatusSummary from '@/components/service-status/service-status-summary'
import { StatusMap, LineStatus } from '@/common/line-status'

const busLineStatusList: StatusMap = {
  'R2': LineStatus.Delay,
  'R5': LineStatus.Delay,
  '29': LineStatus.Delay,
  '17': LineStatus.NotInService,
  '50': LineStatus.Delay,
  '99': LineStatus.NotInService,
}

const trainLineStatusList: StatusMap = {
  'Canada Line': LineStatus.Delay,
  'Expo Line': LineStatus.NotInService,
}
const seaBusLineStatusList: StatusMap = {
  'On Schedule': LineStatus.OnSchedule,
}

export default function ServiceStatus() {

  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle('Service Status');
  }, [])

  return (
    <div className='w-full flex flex-col gap-y-6'>
      <h4 className='text-gray-0 font-bold w-full'>Service Status</h4>
      <p>The lines below is being delay or not in service.</p>

      <ServiceStatusSummary transport='Bus' lineStatusList={busLineStatusList} />
      <hr className='w-full bg-gray-2' />
      <ServiceStatusSummary transport='Train' lineStatusList={trainLineStatusList} />
      <hr className='w-full bg-gray-2' />
      <ServiceStatusSummary transport='Sea Bus' lineStatusList={seaBusLineStatusList} />
      <hr className='w-full bg-gray-2' />

    </div>
  )
}
