import React from 'react'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics  } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../Components/ShoeCard'
import {useState} from 'react'
const Hero = () => {

   const [bigShoeImg,setBigShoeImg] = useState(bigShoe1);

  return (
    <section 
     id="home"
     className='w-full flex flex-col justify-center min-h-screen gap-10 max-container xl:flex-row '
    >
    
    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-28'>
        
        <p
        className='text-xl text-coral-red '
        >Our Summer collections</p>
        <h1
        className='mt-11 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]'
        >
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br/>
          <span className='text-red-400 inline-block mt-3 mr-4'> Nike</span>
          <span>Shoes</span>
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop now" 
        iconURL={arrowRight}/>

        <div
        className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'
        >
         
         {statistics.map((stat,index)=>{
            
            return (<div key={stat.label}>
                <p
                className='text-4xl font-bold font-palanquin'
                >{stat.value}</p>
                <p className='text-slate-gray leading-7'>{stat.label}</p>
              </div>)
         })
        }
          
        </div>
    </div>

    <div className='flex flex-col justify-center items-center bg-primary  bg-hero bg-cover bg-center  xl:min-h-screen max-xl:py-40 relative '>
      <img
        
        src = {bigShoeImg}

      />
      

      <div className='flex flex-row justify-center items-center sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm: px-6'>
        {
         
         shoes.map((shoe,index)=>(
            
          <div key={shoe}> 
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(newBigShoeURL)=>{
                 setBigShoeImg(newBigShoeURL)
              }}
              bigShoeImage={bigShoeImg}
            />
          </div>

         ))

        }
      </div>
    </div>
    </section>
  )
}

export default Hero