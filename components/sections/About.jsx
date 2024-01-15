import React from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import { aboutPoints } from '@/constants'

const About = () => {
  return (
    
    <section className="max-width section-padding">
      <SectionHeader title="Areas of my expertise" subtitle="What can i help you with" />
      <div className="grid grid-cols-1 desktop:grid-cols-3 gap-3 desktop:gap-12">
        {aboutPoints.map((point, index) => (
          <div key={index} className="p-8 tablet:p-12 rounded-lg flex flex-col items-center">
            <Image src={point.image} alt={point.title} width={200} height={200} />
            <h4 className="text-2xl font-semibold mb-3 text-center">{point.title}</h4>
            <p>{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About