'use client'

import Lottie from 'lottie-react'
import animationdata from '@/public/assets/icons/icon404.json'
import Header from '@/components/shared/Header'

const NotFound = () => {
  return (
    <>
        <Header />
        <main className="flex items-center flex-col">
            <Lottie 

                animationData={animationdata} 
                style={{width: '50%', height: '50%', filter: 'grayscale(100%)'}}
            />
            <h2 className='h2-bold text-primary-500'>Page Not Found</h2>
            <p className='mt-5 p-bold-20 text-grey-500'>
                We could not find the page you were looking for.
            </p>
        </main>
    </>
  )
}

export default NotFound