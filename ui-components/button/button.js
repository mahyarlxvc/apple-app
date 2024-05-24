import React from 'react'

export const Button = ({ isPrimary, href, label, endIcon }) => {
    return (
        <div className='flex-center  sm:px-1 sm:py-2 px-2 py-4 '>
            <p className='text-[12%]' >{label}</p>
            {endIcon}
        </div>
    )
}
