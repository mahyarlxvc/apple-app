import React from 'react'

function Input({ type, value, placeholder, name, label, onChange }) {
    return (
        <input
        className='w-full px-1 bg-inherit lg:text-[16px] text-[12px]'
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
            label={label}
            onChange={onChange}
        />
    )
}

export default Input