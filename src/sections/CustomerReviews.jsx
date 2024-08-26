import React from 'react'
import { reviews } from '../constants';
import ReviewCard from '../Components/ReviewCard';
const CustomerReviews = () => {
  return (

    <section className='max-container flex flex-col justify-center items-center w-full'>



      <div className='flex justify-center text-4xl text-center font-palanquin  font-bold'>
        <p>What Our <span className='text-coral-red'>Customers</span> Say?</p>
      </div>

      <div className='flex justify-center items-center  text-center font-montserrat text-slate-gray break-words max-w-md'>
        Hear genuine stories from our satisfied customers about their exceptional experiences with us.
      </div>


      <div className=' w-full  flex  justify-evenly max-lg:flex-col max-lg:items-center'>
        {

          reviews.map((review) => {

            return (
              <ReviewCard key={review.customerName} {...review} />
            )

          })

        }
      </div>


    </section>

  );
};

export default CustomerReviews