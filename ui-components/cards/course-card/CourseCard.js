import Image from 'next/image'
import React from 'react'
import cmd from "@/public/images/cmd.jpg"
import { IconArrowLeft, IconClock } from '@tabler/icons-react'
import Link from 'next/link'

function CourseCard({ id, title, duration }) {
    return (
        <div className='lg:w-[225px] h-[480px] w-11/12 border border-dark-color/25 outline outline-4 outline-dark-color/10 rounded-3xl select-none'>
            <div className='p-5 flex flex-col items-center justify-center'>
                <div className='rounded-3xl xl:w-full w-10/12 overflow-hidden' >
                    <Image src={cmd} />
                </div>
                <div className='md:mt-8 mt-4 md:h-44 overflow-hidden'>
                    <h2 className='text-dark-color/95 text-3xl  text-center font-bold'>
                        {title}
                    </h2>
                </div>
                <div className='mt-10 flex items-center gap-1 text-sm text-dark-color/90 font-bold'>
                    <IconClock size={19} />
                    <p>
                        مدت زمان: <span className='font-extrabold text-dark-color'>{duration}</span> ساعت
                    </p>
                </div>
                <div className='mt-8 flex justify-center'>
                    <Link href="./">
                        <div className='basis-1/4 md:w-fit  rounded-3xl btn-primary'>
                            <div className='flex-center md:px-4 md:h-9 px-9 h-10'>
                                <p className='md:text-md lg:text-md font-bold text-md text-nowrap' >جزییات دوره</p>
                                <IconArrowLeft className='w-[20px]' />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CourseCard