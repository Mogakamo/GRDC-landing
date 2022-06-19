import React from 'react'
import ServiceCard from './Reusables/ServiceCard'

const service = [
  {
    "header": "Why it works",
    "text": "This is because ..."
  },
  {
    "header": "Why it works",
    "text": "This is because ..."
  },
  {
    "header": "Why it works",
    "text": "This is because ..."
  }
]

const Services = () => {
  return (
    <div className=' relative text-center p-10'>
      <h1 className='font-bold text-2xl pb-16'>Discover the Power of the GRDC Platform</h1>
      <div className='grid grid-cols-1 space-y-38 mx-auto md:grid-cols-3'>
      <ServiceCard 
        header={service.header}
      />
      <ServiceCard />
      <ServiceCard />
      </div>
    </div>
  )
}

export default Services