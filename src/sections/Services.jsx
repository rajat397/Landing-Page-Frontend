import React from 'react'
import {services} from '../constants'
import ServiceCard from '../Components/ServiceCard'
const Services = () => {
  return (
    
    <section className='flex flex-wrap max-container gap-9 justify-center max-sm:flex-col '>
      {
        services.map((service)=>{
           return (
              <ServiceCard
               key={service.label}
               {...service}
              />
           )
        })
      }

    </section>

  )
}

export default Services