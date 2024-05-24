import React from 'react'
import Counter from '../../../components/counter/Counter'

function FigureCard({ title, count }) {
    return (
        <div className='bg-dark-color md:rounded-[45px] rounded-3xl flex-center basis-1/6 md:min-w-48 min-w-28 select-none'>
            <div className='flex-center flex-col md:space-y-10 space-y-4 md:py-[39px] py-5'>
                <div>
                    <p className='md:text-4xl text-xl md:font-extrabold font-bold text-primary-color'>
                        <Counter count={count} />
                    </p>
                </div>
                <div>
                    <p className='md:text-2xl text-lg md:font-bold font-semibold text-white'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default FigureCard