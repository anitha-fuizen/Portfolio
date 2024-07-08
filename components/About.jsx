
import Devimg from "./Devimg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import { FaGithub, FaDocker } from "react-icons/fa";
import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';


const infodata = [
    {
        icon: <User2 size={20} />,
        text: 'Anitha Yeruva'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '1234567890'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'anitha.yeruva961@gmail.com'
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 12 Nov 2000'
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Masters in Physics'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'vinukonda,guntur'
    },



]

const QualificationData = [
    {
        title: 'Education',
        data: [
            {
                University: 'Sri Padmavathi Mahila Visvavidyalayam',
                Qualification: "Masters in Physics",
                Year: "2020-2022"
            },
            {
                University: 'SV University',
                Qualification: "Bachelor of Science",
                Year: "2017-2020"
            },
        ]
    },
    {
        title: 'Experience',
        data: [
            {
                company: 'ZelarSoft Pivate Limited',
                role: "Software Engineer",
                years: "2022-present"
            },

        ]
    }
]


const SkillData = [
    {
        title: 'skills',
        data: [
            {
                name: "Front-end Development",
                skills: "ReactJS, NextJs, AngularJs"
            },
            {
                name: "Back-end Development",
                skills: "NodeJS"
            },
            {
                name: "Database",
                skills: "Mongo DB,Supabase"
            },
            {
                name: "UI Libraries & CSS",
                skills: "Fluent UI, Material UI, Tailwind CSS,shadcn UI"
            },

            {
                name: "Scripting Languages",
                skills: "JavaScript, TypeScript"
            },
            {
                name: "Web platform",
                skills: "SharePoint, Power Platform"
            }
        ]
    },
    {
        title: 'Tools',
        data: [

            {
                tool: <FaGithub size={48} />
            },
            {
                tool: <FaDocker size={48} />
            },
            {
                tool: <VscVscode size={48} />
            },
        ]
    }
]


const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    }
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <Devimg
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative '
                            imgSrc='/about/anitha.png'
                        />
                    </div>
                    {/* {tabs} */}
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-4 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='certifications'>Certifications</TabsTrigger>

                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value='personal'>
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">experience of 2years </h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0 "> I specilizing in crafting interacting websites with cutting-edge tecnology delivering dynamic and engaging user experiences.</p>
                                        {/* {icons} */}
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infodata.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div className="font-semibold text-xl">{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        {/* {languages} */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary  text-2xl">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div className="text-lg font-semibold">English,Hindi,Telugu</div>
                                        </div>

                                    </div>
                                </TabsContent>
                                {/* {qualifications} */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">my journey</h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            {/* {experience} */}
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(QualificationData, 'Experience').title}
                                                    </h4>
                                                </div>
                                                {/* {list} */}
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(QualificationData, 'Experience').data.map((item, index) => {
                                                        const { company, role, years } = item;
                                                        return (
                                                            <div className="flex gap-x-8 group " key={index}>
                                                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute-left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                                        {company}
                                                                    </div>
                                                                    <div className="font-semibold text-xl leading-none mb-2">
                                                                        {role}
                                                                    </div>
                                                                    <div className=" text-base font-medium">
                                                                        {years}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* {education} */}
                                            <div >
                                                <div className="flex flex-col gap-y-6">
                                                    <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                        <GraduationCap size={28} />
                                                        <h4 className="capitalize font-medium">
                                                            {getData(QualificationData, 'Education').title}
                                                        </h4>
                                                    </div>
                                                    {/* {list} */}
                                                    <div className="flex flex-col gap-y-8">
                                                        {getData(QualificationData, 'Education').data.map((item, index) => {
                                                            const { University, Qualification, Year } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute-left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div><div></div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {University}
                                                                        </div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {Qualification}
                                                                        </div>
                                                                        <div className=" text-base font-medium">
                                                                            {Year}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                {/* {skills} */}
                                <TabsContent value='skills'>
                                    <div className=" xl:text-left">
                                        {/* <h3 className="h3 mb-8">Tools What I use everyday</h3> */}
                                        <div className="mb-2">
                                            <h4 className="text-2xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                                                {getData(SkillData, "skills").data.map((item, index) => {
                                                    const { name, skills } = item;

                                                    return (
                                                        <div className="flex gap-x-8 mt-2 group" key={index}>
                                                            <div className="h-[75px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute left-[5px] group-hover:translate-y-[75px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">
                                                                    {name}
                                                                </div>
                                                                <div className="subtitle font-medium">
                                                                    {skills}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-2xl font-semibold mb-2 xl:text-left">Tools</h4>
                                            <div className="border-b border-border mb-4"></div>

                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(SkillData, "Tools").data.map((item, index) => {
                                                    const { tool } = item;
                                                    return (
                                                        <div key={index} className="text-primary">
                                                            {tool}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='certifications'>
                                    <div className="text-center xl:text-left">
                                        <div style={{ display: 'flex', alignItems: 'center' }}className="gap-x-2" >
                                            <div className="w-[11px] h-[11px] rounded-full bg-primary xl:right-5 " ></div>
                                            <div>
                                            <p className="subtitle" style={{ margin: 0 }}>Certified pl-900 by Microsoft</p>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>



                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
