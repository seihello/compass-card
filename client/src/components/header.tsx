'use client'
import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '@/context/header-context';
import { useTheme } from 'next-themes';

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

  if (!mounted) {
    return null;
  }

  return (
    <div
      className='container w-full max-w-none h-14 mb-1 flex justify-center items-center relative bg-white dark:bg-gray-0'
      // style={{
      //   boxShadow: title && '0px 0px 10px 0px #0000000A'
      // }}
    >
      <h6 className='text-gray-0 text-center font-bold'>{title}</h6>
      <button
        className='absolute top-1/2 right-0 transform -translate-x-full -translate-y-1/2 dark:text-gray-3'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >{theme === 'light' ? 'Dark' : 'Light'}</button>
    </div>
  )
}
