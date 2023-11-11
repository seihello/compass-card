'use client'
import React, { useState } from 'react'
import CreditItem from './credit-item'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

const creditItems = [
  {
    title: 'Monthly Pass Zone 1',
    date: '2023 April'
  },
  {
    title: 'Monthly Pass Zone 2',
    date: '2023 May'
  },
  {
    title: 'Monthly Pass Zone 3',
    date: '2023 June'
  },
]

export default function CreditSection() {

  const [selectedIndex, setSelectedIndex] = useState(1);

  const forward = () => {
    if (selectedIndex + 1 < creditItems.length) {
      setSelectedIndex(selectedIndex + 1);
    }
  }

  const backward = () => {
    if (selectedIndex - 1 >= 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  return (
    <>
      <h4 className='font-bold text-left'>Your Credit</h4>
      <div className='relative h-32 flex justify-between gap-x-4'>
        {creditItems.map((creditItem, index) =>
          <CreditItem
            key={index}
            index={index}
            selectedIndex={selectedIndex}
            title={creditItem.title}
            date={creditItem.date}
          />
        )}

        {selectedIndex !== 0 &&
          <div className='w-8 h-8 rounded-full border-white box-content absolute top-1/2 translate-y-[-50%] bg-white'>
            <IoIosArrowBack
              onClick={backward}
              className='absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] text-xl text-gray-1'
            />
          </div>
        }


        {selectedIndex !== creditItems.length - 1 &&
          <div className='w-8 h-8 rounded-full border-white box-content absolute top-1/2 translate-y-[-50%] right-0  bg-white'>
            <IoIosArrowForward
              onClick={forward}
              className='absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] text-xl text-gray-1'
            />
          </div>
        }
      </div>
    </>
  )
}
