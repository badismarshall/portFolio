'use client'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Avatar } from '../ui/avatar';

const Books = () => {
  return (
    <div className='flex flex-col'>
        <h1 className="text-start text-3xl font-bold text-gray-800 dark:text-white mb-5">Books</h1>
        <div className='flex flex-col'>
          <VerticalTimeline lineColor='rgb(180, 180, 184)'>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{ background: 'rgb(180, 180, 184)', color: 'rgb(31 41 55)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(180, 180, 184)' }}
              iconStyle={{ background: 'rgb(31 41 55)', color: 'rgb(107 33 168)' }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src='/assets/images/book40.jpeg'
                    alt='book'
                    className='w-[100%] h-[100%] object-contain rounded-full'
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{ background: 'rgb(180, 180, 184)', color: 'rgb(31 41 55)' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(180, 180, 184)' }}
              iconStyle={{ background: 'rgb(31 41 55)', color: 'rgb(107 33 168)' }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src='/assets/images/book40.jpeg'
                    alt='book'
                    className='w-[100%] h-[100%] object-contain rounded-full'
                  />
                </div>
              }
            >
              <h3 className="vertical-timeline-element-title">Creative Director</h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
                <p className='flex my-8'>
                I'm a software engineer, security network specialist, and frontend developer. 
                Currently, I work as a network administrator, where I ensure the seamless operation of networks. My diverse skill set allows me to navigate and excel in various aspects of technology.
                </p>
        </div>
    </div>
  )
}

export default Books