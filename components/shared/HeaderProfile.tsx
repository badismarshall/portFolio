import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import Link from 'next/link'

const HeaderProfile = () => {
  return (
    <div className='w-full flex justify-center flex-col items-center'>
            <Image
                src='/assets/images/MarshallPortrait.jpeg'
                alt='avatar'
                width={100}
                height={100}
                className='rounded-full bg-contain border-gray-300 -100 border-4 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out'   
            />
            <div className='flex mt-5 gap-3 items-center mb-3'>
                <h2 className='font-bold'>Est.1999</h2>
                <p className='text-sm'>Badis MarshalL</p>
            </div>
            <div className='flex gap-1 flex-col'>
              <div className='flex items-center gap-3'>
                <Image 
                  width="20" 
                  height="20" 
                  src="https://img.icons8.com/pastel-glyph/64/security-shield.png" 
                  alt="security-shield"
                />
                <p>
                  security network specialist.
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Image 
                  width="20" 
                  height="20" 
                  src="https://img.icons8.com/pastel-glyph/64/code--v2.png" 
                  alt="code--v2"
                />
                <p>
                  frontend developer.
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Image 
                  width="20" 
                  height="20" 
                  src="https://img.icons8.com/pastel-glyph/64/network--v2.png" 
                  alt="code--v2"
                />
                <p>
                  network administrator.
                </p>
              </div>
            </div>
            <div className='flex gap-6 items-center mt-5'>
              <p className='rounded-full bg-gray-500/10 px-4 py-1 text-gray-500 line-clamp-1 flex gap-2 items-center'>
                <Image  
                  width="20" 
                  height="20" 
                  src="https://img.icons8.com/fluency/48/github.png" 
                  alt="github"
                  className='w-5 h-5'
                />
                <Link 
                  href='https://github.com/badismarshall'
                  target='_blank'
                  className='hover:text-purple-500 transition-all duration-300 ease-in-out'
                >
                  Github
                </Link>
              </p>
              <p className='rounded-full bg-gray-500/10 px-4 py-1 text-gray-500 line-clamp-1 flex gap-2 items-center'>
                <Image  
                  width="20" 
                  height="20" 
                  src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" 
                  alt="twitter"
                  className='w-5 h-5'
                />
                <Link 
                  href='https://twitter.com/badismarshall'
                  target='_blank'
                  className='hover:text-purple-500 transition-all duration-300 ease-in-out'
                >
                  twitter
                </Link>
              </p>
            </div>
    </div>
  )
}

export default HeaderProfile