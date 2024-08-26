import React from 'react'
import {star} from '../assets/icons'
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full max-sm:justify-start pr-10'>
        <img
        src={imgURL}
        alt={name}
        />

        <div className='mt-12 flex '>

            <img src={star} />
            <div className='ml-2 text-slate-gray font-montserrat text-lg'>(4.5)</div>

        </div>
        <div className='text-xl font-bold font-palanquin leading-normal'>
                {name}
        </div>

        <div className='text-xl text-coral-red font-bold'>
            {price}
        </div>
    </div>
  )
}

export default PopularProductCard