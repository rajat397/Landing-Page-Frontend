import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (

    <div className=' flex-1 w-full shadow-3xl rounded-xl ring-1 ring-slate-100 px-10 py-16  min-w-7 sm:min-w-[350px]'>

     <div
      className=' w-[40px] h-[40px]  flex justify-center items-center  bg-coral-red rounded-full  p-2'
     >
     <img src={imgURL} alt="icon" width={24} height={24} />
    </div>  

    
    <p className='text-3xl mt-4 font-bold'>{label}</p>
    <p className='text-slate-gray font-montserrat leading-normal  break-words'>{subtext}</p>
    </div>
  )
}

export default ServiceCard