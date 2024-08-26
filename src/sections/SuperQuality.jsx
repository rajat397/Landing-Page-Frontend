import React from 'react'
import {shoe8 as shoeImg} from '../assets/images'
const SuperQuality = () => {
  return (
     
    <section id="about-us"
     className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >


      <div className='flex flex-1 flex-col lg:max-w-lg'>
        <h2 className='text-4xl font-bold font-palanquin '>
          We Provide You <span className='text-coral-red'>Super Quality </span>Shoes
        </h2>
        <p className='mt-5 text-xl leading-normal font-palanquin text-slate-gray'>
          Ensuring premium comfort and style,   our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.

        </p>
        <p className='mt-6 text-xl leading-normal font-palanquin text-slate-gray'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        
        <div>
        <button className='text-white bg-coral-red rounded-full px-6 py-3  font-montserrat text-lg mt-8' >
          View details 
        </button>
        </div>
        
      </div>

      <div>
        <img src={shoeImg}/>
      </div>

    </section>

  )
}

export default SuperQuality