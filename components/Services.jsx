import React from 'react'
import ServiceCard from './Reusables/ServiceCard'

const service = [
  {
    
  },
  {},
  {}
]

const Services = () => {
  return (
    <div className=' relative text-center p-10'>
      <h1 className='font-bold text-2xl pb-16'>Discover the Power of the GRDC Platform</h1>
      <div className='space-x-10'>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
      </div>
    </div>
  )
}

export default Services