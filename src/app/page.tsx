'use client'
import { useEffect, useContext } from "react";
import PassInfoSection from "@/components/home/pass-info-section"
import FeatureSection from "@/components/home/feature-section"
import { HeaderContext } from "@/context/header-context";

export default function Home() {

  const { setTitle } = useContext(HeaderContext);

  useEffect(() => {
    setTitle('');
  }, [])

  return (
    <>
      <h1 className='w-full text-left text-blue-main font-bold'>Hi, John!</h1>
      <PassInfoSection />
      <FeatureSection />
    </>
  )
}
