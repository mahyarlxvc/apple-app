"use client"
import React, { useState } from 'react'
import Image from "next/image";
import image5 from "@/public/images/apple/5.jpg"
import { IconPlayerPlayFilled, IconX } from '@tabler/icons-react';

function IntroVideo() {
    const [isOpen, setIsOpen] = useState(false)
    const clickHandler = () => setIsOpen(prev => !prev)
    return (
        <>
            <div onClick={clickHandler} className='relative w-11/12 overflow-hidden rounded-3xl border-2 border-white/40 cursor-pointer '>
                <div className='absolute flex-center z-20 w-full blur-effect'>
                    <div className='bg-primary-color rounded-full p-5 w-fit'>
                        <IconPlayerPlayFilled size={46} className='text-dark-color translate-x-[1px]' />
                    </div>
                </div>
                <Image src={image5} />
            </div>
            <div className={`fixed ${isOpen ? "flex-center" : "hidden"} z-40 blur-effect w-screen h-full top-0 left-0 overflow-hidden`}>
                <iframe
                    width={800}
                    height={800}
                    src="https://aspb22.asset.aparat.com/aparat-video/e0dc3c95bc42d5c880ff3d9d8e81dbe732201791-144p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjIzOWNlNGM1YWEzNTUxMDQxYmU4NzgwNTE0Nzg4OTczIiwiZXhwIjoxNzE2NDE1NTQ5LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.Zhg-hc3TgoOt-BRFrzrde0GTdAKGy-gSvHRn8VQdI3g"
                />
                <IconX size={45} onClick={clickHandler} className='text-white absolute top-1 left-1 cursor-pointer' />
            </div>
        </>
    )
}

export default IntroVideo