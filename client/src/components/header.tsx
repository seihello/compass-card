'use client'
import React, { useContext, useEffect, useState, cloneElement } from 'react'
import { HeaderContext } from '@/context/header-context';
import { useTheme } from 'next-themes';
import { TbMoonStars, TbSun } from 'react-icons/tb';

export default function Header() {

  const { theme, setTheme } = useTheme();
  const { title } = useContext(HeaderContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setTheme('light');
  }, [])

  return (
    <header className='container w-full max-w-none h-14 mb-1 flex justify-center items-center bg-white dark:bg-gray-0'>
      <div className='relative w-full max-w-[768px] h-full flex justify-center items-center'>
        <h6 className='text-gray-0 dark:text-gray-3 text-center font-bold'>{title}</h6>
        <button
          className='absolute top-1/2 right-0 transform -translate-x-full -translate-y-1/2 dark:text-gray-3'>
        </button>

        {mounted && cloneElement(theme === 'light' ? <TbMoonStars /> : <TbSun className='' />,
          {
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
            style: { fontSize: '1.5rem' },
            className: `absolute top-1/2 right-0 transform -translate-x-full -translate-y-1/2 ${theme === 'dark' && 'text-gray-3'} cursor-pointer`
          })}
      </div>

    </header>
  )
}
