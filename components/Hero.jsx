

import { Button } from "./ui/button"
import Link from "next/link"
import { Download, Send } from "lucide-react"
import { RiBriefcase4Fill, RiTeamFill, RiArrowDownSLine, RiTodoFill } from 'react-icons/ri'
import Devimg from "./Devimg"
import Badge from "./Badge"
import Socials from "./Socials"


const Hero = () => {
 

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
       
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
          <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">Fullstack developer</div>
          <h1 className="h1 mb-4">Hello, my name is Anitha Yeruva</h1>
          <p className="subtitle mx-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what I engage in professionally.</p>
          <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
            <Link href="/contact">
            <Button className="gap-x-2">Contact me<Send size={20}/></Button>
            </Link>
            <a href="/anithacv.pdf" download>
            <Button className="gap-x-2" variant='secondary'>Download CV<Download size={20}/></Button>
            </a>
          </div>
          <Socials 
          containerStyles='flex gap-x-6 mx-auto xl:mx-0'
          iconsStyles='text-foreground text-[28px] hover:text-primary transition-all'
          />
          </div>
          <div className="hidden xl:flex relative">
            <Badge 
            containerStyles='absolute top-[24%] -left-[38rem]'
            icon={<RiBriefcase4Fill/>}
             endCountNum={1} 
             badgeText='years of experience'
             />
             <Badge 
            containerStyles='absolute top-[80%] -left-[38rem]'
            icon={<RiBriefcase4Fill/>}
             endCountNum={2} 
             badgeText='years of experience'
             />
             <Badge 
            containerStyles='absolute top-[55%] -right-8'
            icon={<RiBriefcase4Fill/>}
             endCountNum={3} 
             badgeText='years of experience'
             />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute top-1 right-2">
            <Devimg 
            containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" 
            imgSrc='/hero/anitha.png'
            imgStyles="w-full h-full object-cover"
            />
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Hero
