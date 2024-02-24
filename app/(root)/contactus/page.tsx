import LeaveaMessage from '@/components/shared/LeaveaMessage'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center gap-8'>
        Let&apos;s chat
        
        <LeaveaMessage/>
    </div>
  )
}

export default page