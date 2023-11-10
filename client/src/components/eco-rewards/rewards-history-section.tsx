import React from 'react'
import HistoryItem from '@/components/eco-rewards/history-item'

const historyItems = [
  {
    title: 'Monthly Pass Zone 3',
    date: '2023 February 5th'
  },
  {
    title: 'Monthly Pass Zone 2',
    date: '2023 March 21st'
  }
]

export default function RewardsHistorySection() {
  return (
    <>
      <h4 className='font-bold text-left'>Your Eco Rewards History</h4>
      <div className='flex flex-col space-between gap-y-4'>
        {historyItems.map((historyItem) =>
          <HistoryItem title={historyItem.title} date={historyItem.date} />
        )}
      </div>
    </>
  )
}
