import React from 'react'

function Input({ type, control, value, placeholder, name, label, onChange, ...props }) {
    return (
        <input
            className='w-full px-1 bg-inherit lg:text-[16px] text-[12px]'
            type={type}
            ref={control}
            value={value}
            placeholder={placeholder}
            name={name}
            label={label}
            onChange={onChange}
        />
    )
}

export default Input