import Books from '@/components/shared/Books'
import HeaderProfile from '@/components/shared/HeaderProfile'
import MyLocation from '@/components/shared/MyLocation'
import Photos from '@/components/shared/Photos'
import Projects from '@/components/shared/Projects'
import Technologie from '@/components/shared/Technologie'
import Testimonials from '@/components/shared/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeaderProfile />
      {/* <ProjectCard /> */}
      <Projects />
      <Technologie />
      <Photos />
      <Testimonials />
      {/* <MyLocation /> */}
      <Books />
    </div>
  )
}

export default page