import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'

function CircularLoader() {
    return (
        <div className='flex-center gap-4'>
            <p>درحال پردازش</p>
            <IconLoader2 size={60} className="text-primary-color cusom-transition animate-spin " />
        </div>
    )
}

export default CircularLoader