import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button  className='flex bg-orange-600 text-white px-7 py-3 rounded-full justify-center items-center text-lg leading-none
    border font-montserrat ' >
       {label}
       <img src={iconURL} alt="arrow right icon" className='ml-3 '/>
    </button>
  )
}

export default Button