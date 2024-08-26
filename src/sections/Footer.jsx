import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex max-lg:flex-col justify-between items-start gap20 flex-wrap '>

        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo}
              width={150}
              height={50}
            />
          </a>
          <p className='mt-6 text-white-400 text-base leading-7 font-montserrat sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {
              socialMedia.map((icon) => (
                <div className='flex justify-center items-center w-12 h-12  bg-white rounded-full'>
                  <img src={icon.src} width={24} height={24} />
                </div>
              ))
            }
          </div>
        </div>

        <div className='flex flex-1 max-lg:mt-11 justify-between lg:gap-10 gap-20 flex-wrap lg:ml-6 '>

          {
            footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className='font-bold text-2xl text-white flex justify-center'>{section.title}</h4>
                <ul className=' mt-4 flex flex-col justify-center items-center'>
                  {
                    section.links.map((link) => (
                      <li>
                        <a href={link.link} className='text-white-400 text-base font-sans hover:text-slate-gray cursor-pointer leading-8'>{link.name}</a>
                      </li>

                    ))
                  }
                </ul>
              </div>
            ))
          }

        </div>

      </div>
    </footer>
  )
}

export default Footer 