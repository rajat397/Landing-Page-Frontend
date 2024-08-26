import React from 'react'

const Subscribe = () => {
  return (
    <section className=' max-container gap-10 flex max-lg:flex-col lg:justify-between justify-center' id="contact-us"> 


      <div className='text-4xl font-bold font-palanquin  lg:max-w-md '> 

      Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter

      </div>
      
      

      <div className=' mt-10  border-2 border-slate-gray rounded-full px-3 py-2 flex max-w-lg gap-5 z-10' >

        <input type="text" placeholder="subscribe@nike.com" 
        className='border-white flex-1 px-4 input '
        />

        <button className='bg-coral-red text-white rounded-full px-8 text-lg font-palanquin py-2 '>Sign Up</button>    
                  
      </div>


     

    </section>
  )
}

export default Subscribe