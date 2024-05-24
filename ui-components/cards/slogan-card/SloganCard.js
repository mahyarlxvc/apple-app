import { IconHexagons } from '@tabler/icons-react'
import React from 'react'

function SloganCard({ title }) {
    return (
        <div className='overflow-hidden border border-primary-color custom-transition hover:bg-primary-color bg-primary-color/5 rounded-3xl lg:h-[266px] lg:w-[270px]  h-[152px] w-[260px] select-none'>
            <div className='relative p-5'>
                <p className='abolute z-10 text-xl text-yellow-800 font-bold'>
                    {title}
                </p>
                <IconHexagons size={255} className='absolute lg:top-[70px] lg:-left-[52px] -top-11 -left-24 rotate-12 text-amber-800/15' />
            </div>
        </div>
    )
}

export default SloganCard