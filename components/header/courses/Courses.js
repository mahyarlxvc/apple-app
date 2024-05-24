"use client"
import { IconSchool, IconTriangleInvertedFilled } from '@tabler/icons-react'
import Link from 'next/link'
import React, { useState } from 'react'

function Categories({ categoryItems }) {
    const [isCoursesMenuOpen, setIsCoursesMenuOpen] = useState(false)
    let timeout;
    const mouseLeaveHandler = () => timeout = setTimeout(() => setIsCoursesMenuOpen(false), 50)
    const mouseEnterHandler = () => timeout = setTimeout(() => setIsCoursesMenuOpen(true), 200)
    return (
        <div className='relative py-2' onMouseLeave={mouseLeaveHandler}>
            <div >
                <Link href="/"  >
                    <div onMouseEnter={mouseEnterHandler} className='flex items-center gap-3 text-dark-color hover:text-black'>
                        <p className="nav-item xl:text-[19px] text-[16px] text-nowrap custom-transition text-inherit">دوره ها</p>
                        <IconTriangleInvertedFilled className="text-inherit custom-transition" size={11} />
                    </div>
                </Link>
                <div className={`absolute ${isCoursesMenuOpen ? "block" : "hidden"} z-10 top-10 -right-4 xl:w-[903px] w-[693px] shadow drop-shadow-2xl shadow-black/30 bg-white rounded-2xl`}>
                    <div className='flex flex-wrap px-4 py-1'>
                        {categoryItems.map(({ id, title }) => <div className='xl:w-[290px] w-[220px] py-5 custom-transition hover:bg-gray-500/10 rounded-xl'>
                            <Link href="./">
                                <div className='flex gap-2 px-2'>
                                    <IconSchool />
                                    <p className='font-semibold text-dark-color'>{title}</p>
                                </div>
                            </Link>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories