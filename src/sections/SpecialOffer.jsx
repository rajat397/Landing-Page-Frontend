import React from 'react'
import {offer} from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>  

      <div className='flex'>
            <img src={offer} className='object-contain w-full' />
      </div>

      <div className='flex flex-1 flex-col lg:max-w-lg'>
        <h2 className='text-4xl font-bold font-palanquin '>
           <span className='text-coral-red'>Special </span>Offer
        </h2>
        <p className='mt-5 text-xl leading-normal font-palanquin text-slate-gray'>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.

        </p>

        <p className='mt-6 text-xl leading-normal font-palanquin text-slate-gray'>

        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.

        </p>
        
        <div className='flex gap-5 mt-8'>
         <Button label="Shop now" 
              iconURL={arrowRight}/>
           <button className='bg-white text-slate-gray ring-1 ring-slate-gray rounded-full px-6 font-montserrat'>
            Learn more
           </button>
        </div>
        
      </div>
    </section>
  )
}

export default SpecialOffer