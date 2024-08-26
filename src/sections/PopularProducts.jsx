import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../Components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id="products" className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
          <div className='text-4xl font-palanquin font-bold'>
          Our <span className='text-red-400'>Popular</span> Products
          </div>
          <div className='text-slate-gray font-palanquin lg:max-w-lg text-lg'>
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
          </div>
      </div>

      <div
      className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'
      >
 {
        products.map((product)=>{
          return(
               <PopularProductCard
                
               key={product.name}
               {...product}

               />
          );
        })
       }

      </div>
      

    </section>
  )
}

export default PopularProducts