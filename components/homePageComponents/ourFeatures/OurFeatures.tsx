import React from 'react'
import { OUR_FEATURES } from '@/constants'
import FeatureCard from './FeatureCard'

const OurFeatures = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 container gap-6 py-9 flex-wrap justify-center'>
      {OUR_FEATURES.map(feature => (
        <FeatureCard key={feature.title} {...feature} />
      ))}
    </div>
  )
}

export default OurFeatures