'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from './ProjectCard'

const projectdata = [
    {
        image: '/work/1.png',
        category: 'Sharepoint',
        name: 'sharepoint',
        description: "",
         link:'/'
    },
    {
        image:'/work/1.png',
        category: 'Reactjs',
        name: 'sharepoint',
        description: "",
         link:'/'
    },
    {
        image: '/work/1.png',
        category: 'NextJs',
        name: 'saharepoint',
        description: "",
         link:'/'

    },
    {
        image: '/work/1.png',
        category: 'NextJs',
        name: 'saharepoint',
        description: "",
         link:'/'
    },
    {
        image: '/work/1.png',
        category: 'NextJs',
        name: 'saharepoint',
        description: "",
        link:'/'
    },
    {
        image: '/work/1.png',
        category: 'NextJs',
        name: 'saharepoint',
        description: "",
         link:'/'
    },
    {
        image: '/work/1.png',
        category: 'NextJs',
        name: 'saharepoint',
        description: "",
        link:'/'
    }
]

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto flex flex-col xl:flex-row items-center xl:items-start'>
                {/* {text} */}
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Latest Projects</h2>
                    <p className='subtitle mb-8'>wertyuiknbvcdsw awertyuiasdefrtyu sedrftyuio</p>
                    <Link href='/projects'>
                        <Button>All Projects</Button>
                    </Link>
                </div>
                {/* {slider} */}
                <div className='w-full xl:max-w-[1000px] xl:absolute xl:right-0 xl:top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                        640:{
                            slidesPerView:2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
                      {/* {show only first 4 projects} */}
                      {projectdata.slice(0,4).map((project,index)=>{
                         return <SwiperSlide key={index}>
                                <ProjectCard project={project}/>
                            </SwiperSlide>
                         
                      })

                      }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work
