import React from 'react'
import {headerLogo} from '../assets/images/index'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className="flex justify-between items-center max-container"> 
            <a href="/">
                
                <img src={headerLogo}/>
            </a>

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>

               {
                  
                  navLinks.map((item)=>{
                   return(  
                    <li key={item.label}>

                      <a href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                      >
                             {item.label}
                      </a>
                            
                    </li>
                   )
                  })

               }

            </ul>

            <div className='lg:hidden'>
              <img src={hamburger}
                alt="Hamburger"
                width={25}
                height={25}
                id="hamburgerIcon"
              />
            </div>

            {/* {
              hamburgerIcon = document.getElementById("hamburgerIcon")

              hamburgerIcon.addEventListener('click',()=>{
                return (

                )
              })
            } */}
        </nav>
    </header>

  )
}

export default Nav