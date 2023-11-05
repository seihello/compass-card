import PassInfoSection from "@/components/home/pass-info-section"
import FeatureSection from "@/components/home/feature-section"

export default function Home() {
  return (
    <>
      <h1 className='w-full text-left text-blue-main font-bold'>Hi, John!</h1>
      <PassInfoSection />
      <FeatureSection />
    </>
  )
}
