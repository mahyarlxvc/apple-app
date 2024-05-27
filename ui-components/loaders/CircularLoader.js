import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'

function CircularLoader({ text }) {
    return (
        <div className='flex-center gap-4 w-full h-full'>
            <p>{text}</p>
            <IconLoader2 size={60} className="text-primary-color cusom-transition animate-spin " />
        </div>
    )
}

export default CircularLoader