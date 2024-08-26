import React from 'react'
import {star} from '../assets/icons'
const ReviewCard = ({customerName,imgURL,rating,feedback}) => {
  return (
    <section className='flex flex-col justify-center items-center max-w-sm text-md leading-normal px-12 py-8 mt-12'>
           <div className='flex '>
                  <img src={imgURL} 
            
                  className='object-contain h-[100px] w-[100px] rounded-full'/>

           </div>
        
            <div className='text-center  max-w-sm info-text text-slate-gray font-montserrat flex justify-center items-center px-4 py-2 mt-3' > 
                {feedback}
            </div>

            <div className='flex gap-2 mt-2'>
                <img src={star}/>
                <div className='font-montserrat text-slate-gray text-lg '>(4.5)</div>
            </div>

            <div className='font-bold text-xl font-montserrat mt-3'>
 
                {customerName}

            </div>
    </section>
  )
}

export default ReviewCard