import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className='w-full text-left text-blue-main font-bold'>Hi, John!</h1>

      <div className="flex flex-col gap-y-6 w-full px-4 py-8 bg-blue-verylight border-t-8 border-yellow-main shadow rounded">
        <div className="flex items-start text-blue-main">
          <img src='/compass_logo.png' className='w-10 h-auto' />
          <div>
            <h4 className="font-bold">John's Compass Card</h4>
            <p className='text-sm'>1111-2222-3333-4444-5555</p>
          </div>
        </div>
        <div className='text-sm text-gray-1'>
          <p>Monthly Pass <span className='font-bold'>Zone1 </span>exp. <span className='font-bold'>May 31</span></p>
          <p>Balance <span className='font-bold'>$10.05</span></p>
          <p>Last Used <span className='font-bold'>May 24 2023 08.31AM</span></p>
        </div>
      </div>
    </>
  )
}
