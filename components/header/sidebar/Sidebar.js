"use client"

import React, { useState } from 'react'
import { IconMenu2, IconTriangleInverted, IconTriangleInvertedFilled, IconX } from '@tabler/icons-react'
import Search from '../search/Search'
import Logo from '../logo/Logo'
import Link from 'next/link'
import { getLatestCourses } from '../../../app/utils'

function Sidebar({ categoryItems, menuItems }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMenuSelected, setIsMenuSelected] = useState({ elemId: "", isClicked: false })
  const sidebarHandler = () => setIsSidebarOpen(prev => !prev)
  const clickHandler = ({ target: { id } }) => {
    setIsMenuSelected(prev => ({ elemId: id, isClicked: !prev.isClicked }))
  }
  return (
    <>
      <IconMenu2 size="34" onClick={sidebarHandler} className='min-[900px]:hidden cursor-pointer mr-24 text-dark-color' />
      <section>
        <div onClick={sidebarHandler} className={isSidebarOpen ? "blur-effect scroll-smooth" : "hidden"}></div>
        <aside className={`fixed top-0 right-0 z-40 h-screen select-none transition-all ${isSidebarOpen ? 'translate-x-0' : 'translate-x-[500px]'}`} aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-200">
            <div>
              <div>
                <IconX onClick={sidebarHandler} size="28" className='absolute z-40 left-3 transition-all hover:size-[30px] hover:translate-x-[-1px] cursor-pointer' />
                <Logo />
              </div>
              <div className='mt-4'>
                <Search />
              </div>
            </div>
            {
              /* body ******************* */
            }
            <div className='mt-6'>
              <div>
                <div className='border-b-[1px] border-gray-400/50 bg-dark-color/15 hover:btn-primary hover:rounded-none hover:cursor-pointer'>
                  <div className='w-fit py-4 pr-3' >
                    <Link href="./">
                      <div>
                        <p className='text-[15px]'>خانه</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div id='courses' onClick={(event) => clickHandler(event)} className={`${isMenuSelected.elemId === "courses" && isMenuSelected.isClicked && "btn-secondary text-primary-color"} rounded-none border-b-[1px] border-gray-400/50 hover:btn-primary hover:rounded-none`}>
                  <div className='w-fit py-4 pr-3' >
                    <Link href='./'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[15px]'>دوره ها</p>
                        <IconTriangleInvertedFilled size={14} />
                      </div>
                    </Link>
                  </div>
                </div>
                {categoryItems.map(({ title }) => <div className={` ${isMenuSelected.elemId === "courses" && isMenuSelected.isClicked ? "block " : "hidden"} border-b-[1px] border-gray-400/50 hover:btn-primary hover:rounded-none`}>
                  <Link href='./'>
                    <div className='flex items-center gap-2 py-3 pr-8'>
                      <p className='text-[14px]'>{title}</p>
                    </div>
                  </Link>
                </div>
                )}
              </div>
              {menuItems.map(({ title, id, subMenus }) => <div>
                <div id={id} onClick={(event) => clickHandler(event)} className={`border-b-[1px] ${isMenuSelected.elemId === id && isMenuSelected.isClicked && "btn-secondary text-primary-color"} rounded-none border-gray-400/50 hover:btn-primary hover:rounded-none`}>
                  <div className='w-fit py-4 pr-3'>
                    <Link href='./'>
                      <div className='flex items-center gap-2'>
                        <p className='text-[15px]'>{title}</p>
                        {subMenus && <IconTriangleInvertedFilled size={14} />}
                      </div>
                    </Link>
                  </div>
                </div>
                {subMenus && subMenus.map(({ title }) => <div className={`border-b-[1px] ${isMenuSelected.elemId === id && isMenuSelected.isClicked ? "block " : "hidden"} border-gray-400/50 hover:btn-primary hover:rounded-none`}>
                  <Link href='./'>
                    <div className='flex items-center gap-2 py-3 pr-8'>
                      <p className='text-[14px]'>{title}</p>
                    </div>
                  </Link>
                </div>
                )}
              </div>

              )}
            </div>
            {
              /* footer **************** */
            }
            <div className='mt-6 flex-center select-text'>
              <div className='w-fit flex flex-col justify-center items-center gap-6 mt-5 mb-3 py-2 rounded-3xl bg-white shadow-md shadow-black/15'>
                <div className='flex-center flex-col '>
                  <p className='pb-2 font-medium text-dark-color'>شماره تماس</p>
                  <p className='pb-2 font-extrabold text-dark-color text-sm'>09308354294</p>
                </div>
                <div className='flex-center flex-col px-7'>
                  <p className='pb-2 font-medium text-dark-color'>ایمیل</p>
                  <Link href="./">
                    <p className='pb-2 font-extrabold text-dark-color text-sm'>mahyarmansoorian711@gmail.com</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section >
    </>
  )
}

export default Sidebar